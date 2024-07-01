import React from 'react';
import { Todo } from '../types';
import './DoneCard.scss';
import useTodo from '../hooks/useTodo';

interface DoneItemProps {
  todo: Todo;
}

const DoneCard: React.FC<DoneItemProps> = React.memo(({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodo();
  const handleToggle = () => {
    toggleTodo(todo.id);
  };
  const handleDelete = () => {
    deleteTodo(todo.id);
  };
  return (
    <li className='done-card' onClick={handleToggle}>
      <div className='done-card-title'>{todo.todoTitle}</div>
      <div className='done-card-text'>{todo.context}</div>
      <img
        src='/icon/icon-delete.svg'
        className='done-card-delete-icon'
        onClick={handleDelete}
      />
    </li>
  );
});

export default DoneCard;
