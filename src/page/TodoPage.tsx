import AddTodoForm from '../components/AddTodoForm';
import TodoDashboard from '../components/TodoDashboard';
import useTodo from '../hooks/useTodo';

const TodoPage: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodo();

  return (
    <>
      <AddTodoForm addTodo={addTodo} />
      <TodoDashboard
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default TodoPage;
