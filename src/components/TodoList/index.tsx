import React from 'react';
import { Todo } from '../../types';
import './TodoList.scss';
import './TodoItem.scss';
import TodoItem from '../TodoItem';

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
