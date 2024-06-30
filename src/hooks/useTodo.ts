import { useCallback, useEffect, useState } from 'react';
import { Todo } from '../types';

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const addTodo = useCallback((todoTitle: string, context: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      todoTitle,
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

  return { todos, addTodo, toggleTodo, deleteTodo };
};

export default useTodo;
