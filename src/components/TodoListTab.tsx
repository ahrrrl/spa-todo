import React from 'react';
import { Todo } from '../types';
import TodoList from './TodoList';

interface TodoListTabProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const TodoListTab: React.FC<TodoListTabProps> = React.memo(
  ({ todos, toggleTodo }) => {
    const tryTodos = todos.filter((todo) => !todo.isDone);
    const doneTodos = todos.filter((todo) => todo.isDone);

    return (
      <div>
        <h2>시도할 일</h2>
        <TodoList todos={tryTodos} toggleTodo={toggleTodo} buttonText='완료' />
        <h2>완료된 일</h2>
        <TodoList todos={doneTodos} toggleTodo={toggleTodo} buttonText='취소' />
      </div>
    );
  }
);

export default TodoListTab;
