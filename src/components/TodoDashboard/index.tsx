import React from 'react';
import TodoList from '../TodoList';
import './TodoDashboard.scss';
import DoneList from '../DoneList';
import useTodo from '../../hooks/useTodo';

interface TodoListTabProps {}

const TodoDashboard: React.FC<TodoListTabProps> = React.memo(() => {
  const { todos } = useTodo();
  const tryTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div className='todo-dashboard-container'>
      {tryTodos.length ? <h2>해야 해!</h2> : null}
      <TodoList todos={tryTodos} />
      {doneTodos.length ? <h2>했어!</h2> : null}
      <DoneList todos={doneTodos} />
    </div>
  );
});

export default TodoDashboard;
