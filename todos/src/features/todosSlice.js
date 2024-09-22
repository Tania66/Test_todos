import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
