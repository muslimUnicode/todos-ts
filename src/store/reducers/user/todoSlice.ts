import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodos, todoState } from "../../../types/ITodos";
import { deleteTodos, getTodos, postTodos, updateTodos } from "./todoAction";

const initialState: todoState = {
    todos: [],
    isLoading: false,
    loadingAddTodo: false,
    loadingDeleteTodo: "",
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTodos.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(getTodos.fulfilled, (state, action: PayloadAction<ITodos[]>) => {
            state.isLoading = false
            state.todos = action.payload
        });
        builder.addCase(postTodos.pending, (state) => {
            state.loadingAddTodo = true
        });
        builder.addCase(postTodos.fulfilled, (state, action: PayloadAction<ITodos>) => {
            state.todos.push(action.payload)
            state.loadingAddTodo = false
        })
        builder.addCase(deleteTodos.pending, (state, action) => {
            state.loadingDeleteTodo = action.meta.arg
        });
        builder.addCase(deleteTodos.fulfilled, (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo._id !== action.payload)
            state.loadingDeleteTodo = ""
        })
        builder.addCase(updateTodos.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(updateTodos.fulfilled, (state, action: PayloadAction<ITodos>) => {
            state.isLoading = false
            state.todos = state.todos.map(todo => todo._id === action.payload._id ? action.payload : todo)
        })
    },
});

export default todoSlice.reducer;