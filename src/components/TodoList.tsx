import React from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';
import './TodoList.scss';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = React.memo(
  ({ todos, toggleTodo, deleteTodo }) => {
    return (
      <ul className='todo-list'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    );
  }
);

export default TodoList;
