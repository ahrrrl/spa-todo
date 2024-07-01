import React from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';
import './TodoList.scss';

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = React.memo(({ todos }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
});

export default TodoList;
