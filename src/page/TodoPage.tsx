import { useState, useEffect } from 'react';
import AddTodoTab from '../components/AddTodoTab';
import TodoListTab from '../components/TodoListTab';
import { Todo } from '../types';

const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const addTodo = (title: string, context: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      context,
      isDone: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div>
      <AddTodoTab addTodo={addTodo} />
      <TodoListTab todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default TodoPage;
