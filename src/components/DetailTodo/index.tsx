import { useParams } from 'react-router-dom';
import useTodo from '../../hooks/useTodo';
import './DetailTodo.scss';

const DetailTodo = () => {
  const { id } = useParams();
  const { todos } = useTodo();
  const todo = todos.find((item) => item.id === Number(id));

  return todo ? (
    <div className='detail-todo-container'>
      {todo.isDone ? <p>잘했어!</p> : <p>어서 해!</p>}
      <h1>{todo.todoTitle}</h1>
      <p>{todo.context}</p>
    </div>
  ) : (
    <div>해당 내용이 없습니다!</div>
  );
};

export default DetailTodo;
