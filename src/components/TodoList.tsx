import React from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  buttonText: string;
}

const TodoList: React.FC<TodoListProps> = React.memo(
  ({ todos, toggleTodo, buttonText }) => {
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            buttonText={buttonText}
          />
        ))}
      </ul>
    );
  }
);

export default TodoList;
