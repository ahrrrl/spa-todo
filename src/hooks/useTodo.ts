import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../redux/modules/todoSlice';
import { RootState } from '../redux/config/configStore';

const useTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);

  const addNewTodo = useCallback(
    (todoTitle: string, context: string) => {
      dispatch(addTodo({ todoTitle, context }));
    },
    [dispatch]
  );

  const toggleTodoStatus = useCallback(
    (id: number) => {
      dispatch(toggleTodo(id));
    },
    [dispatch]
  );

  const removeTodo = useCallback(
    (id: number) => {
      dispatch(deleteTodo(id));
    },
    [dispatch]
  );

  return {
    todos,
    addTodo: addNewTodo,
    toggleTodo: toggleTodoStatus,
    deleteTodo: removeTodo,
  };
};

export default useTodo;
