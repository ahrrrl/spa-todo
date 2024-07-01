import React from 'react';
import { Todo } from '../types';
import './TodoItem.scss';
import useTodo from '../hooks/useTodo';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = React.memo(({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodo();
  const handleToggle = () => {
    toggleTodo(todo.id);
  };
  const handleDelete = () => {
    deleteTodo(todo.id);
  };
  return (
    <li className='todo-item' onClick={handleToggle}>
      <div className='todo-title'>{todo.todoTitle}</div>
      <div className='todo-text'>{todo.context}</div>
      <img
        src='/icon/icon-delete.svg'
        className='todo-delete-icon'
        onClick={handleDelete}
      />
    </li>
  );
});

export default TodoItem;
