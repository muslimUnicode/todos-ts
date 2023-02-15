import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodos, todoState } from "../../../types/ITodos";
import { getTodos } from "./todoAction";

const initialState: todoState = {
    todos: [],
    isLoading: false,
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
            state.todos = action.payload
            state.isLoading = false
        })
    },
});

export default todoSlice.reducer;