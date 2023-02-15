import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk(
    "users/upload",
    async function () {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos")
        return await res.json()
    }
)