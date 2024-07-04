import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Todo } from '../../types';
import useTodo from '../../hooks/useTodo';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = React.memo(({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodo();
  const navigate = useNavigate();
  const handleToggle = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    toggleTodo(todo.id);
  };
  const handleDelete = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    deleteTodo(todo.id);
  };
  return (
    <li
      className='todo-item'
      onClick={() => navigate(`/TodoDetail/${todo.id}`)}
    >
      <div className='todo-title'>{todo.todoTitle}</div>
      <div className='todo-text'>{todo.context}</div>
      <img
        src='/icon/icon-check-mark.svg'
        className='todo-completed-icon'
        onClick={handleToggle}
      />
      <img
        src='/icon/icon-delete.svg'
        className='todo-delete-icon'
        onClick={handleDelete}
      />
    </li>
  );
});

export default TodoItem;
