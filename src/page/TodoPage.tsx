import AddTodoForm from '../components/AddTodoForm';
import TodoDashboard from '../components/TodoDashboard';

const TodoPage: React.FC = () => {
  return (
    <>
      <AddTodoForm />
      <TodoDashboard />
    </>
  );
};

export default TodoPage;
