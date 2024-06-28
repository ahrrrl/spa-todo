import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  buttonText: string;
}

const TodoItem: React.FC<TodoItemProps> = React.memo(
  ({ todo, toggleTodo, buttonText }) => {
    return (
      <li>
        {todo.title}: {todo.context}
        <button onClick={() => toggleTodo(todo.id)}>{buttonText}</button>
      </li>
    );
  }
);

export default TodoItem;
