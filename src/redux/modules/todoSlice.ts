import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types';

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (
      state,
      action: PayloadAction<{ todoTitle: string; context: string }>
    ) => {
      const newTodo: Todo = {
        id: Date.now(),
        todoTitle: action.payload.todoTitle,
        context: action.payload.context,
        isDone: false,
      };
      state.todos.unshift(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { setTodos, addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
