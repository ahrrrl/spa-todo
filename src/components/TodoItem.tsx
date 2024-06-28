import React from 'react';
import { Todo } from '../types';
import './TodoItem.scss';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = React.memo(
  ({ todo, toggleTodo, deleteTodo }) => {
    const handleToggle = () => {
      toggleTodo(todo.id);
    };
    const handleDelete = () => {
      deleteTodo(todo.id);
    };
    return (
      <li className='todo-item' onClick={handleToggle}>
        {todo.title}: {todo.context}
        <img
          src='/icon/icon-delete.svg'
          className='todo-delete-icon'
          onClick={handleDelete}
        />
      </li>
    );
  }
);

export default TodoItem;
