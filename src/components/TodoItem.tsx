import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = React.memo(
  ({ todo, toggleTodo, deleteTodo }) => {
    return (
      <li>
        {todo.title}: {todo.context}
        <button onClick={() => toggleTodo(todo.id)}>완료</button>
        <button onClick={() => deleteTodo(todo.id)}>삭제</button>
      </li>
    );
  }
);

export default TodoItem;
