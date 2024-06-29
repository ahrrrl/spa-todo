import React from 'react';
import TodoList from './TodoList';
import { Todo } from '../types';
import './TodoListTab.scss';
import DoneList from './DoneList';

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
        <h2>해야 해!</h2>
        <TodoList
          todos={tryTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <h2>했어!</h2>
        <DoneList
          todos={doneTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    );
  }
);

export default TodoListTab;
