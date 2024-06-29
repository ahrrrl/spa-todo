import { useState, useEffect, useCallback } from 'react';
import TodoListTab from '../components/TodoListTab';
import { Todo } from '../types';
import AddTodoForm from '../components/AddTodoForm';

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const addTodo = useCallback((title: string, context: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      context,
      isDone: false,
    };
    setTodos((prevTodos) => {
      const updatedTodos = [newTodo, ...prevTodos];
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }, []);

  const toggleTodo = useCallback((id: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }, []);

  return (
    <>
      <AddTodoForm addTodo={addTodo} />
      <TodoListTab
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default TodoPage;
