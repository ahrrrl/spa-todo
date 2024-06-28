import React from 'react';
import TodoList from './TodoList';
import { Todo } from '../types';
import './TodoListTab.scss';

interface TodoListTabProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoListTab: React.FC<TodoListTabProps> = React.memo(
  ({ todos, toggleTodo, deleteTodo }) => {
    const tryTodos = todos.filter((todo) => !todo.isDone);
    const doneTodos = todos.filter((todo) => todo.isDone);

    return (
      <div className='todo-list-tab'>
        <h2>시도할 일</h2>
        <TodoList
          todos={tryTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <h2>완료된 일</h2>
        <TodoList
          todos={doneTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    );
  }
);

export default TodoListTab;
