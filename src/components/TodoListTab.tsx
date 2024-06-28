import { Todo } from '../types';

interface TodoListTabProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const TodoListTab: React.FC<TodoListTabProps> = ({ todos, toggleTodo }) => {
  const tryTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div>
      <h2>시도할 일</h2>
      <ul>
        {tryTodos.map((todo) => (
          <li key={todo.id}>
            {todo.title}: {todo.context}
            <button onClick={() => toggleTodo(todo.id)}>완료</button>
          </li>
        ))}
      </ul>

      <h2>완료된 일</h2>
      <ul>
        {doneTodos.map((todo) => (
          <li key={todo.id}>
            {todo.title}: {todo.context}
            <button onClick={() => toggleTodo(todo.id)}>취소</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListTab;
