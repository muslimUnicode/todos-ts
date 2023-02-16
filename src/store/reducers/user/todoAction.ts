import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk(
    "users/upload",
    async function () {
        const res = await fetch("https://unicode-todo.onrender.com/todos")
        return await res.json()
    }
)