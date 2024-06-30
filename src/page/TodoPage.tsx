import TodoListTab from '../components/TodoListTab';
import AddTodoForm from '../components/AddTodoForm';
import useTodo from '../hooks/useTodo';

const TodoPage: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodo();

  return (
    <>
      <AddTodoForm addTodo={addTodo} />
      <TodoListTab
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default TodoPage;
