import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITodos } from "../../../types/ITodos";

export const getTodos = createAsyncThunk(
    "todo/upload",
    async function () {
        const res = await fetch("https://unicode-todo.onrender.com/todos")
        return await res.json()
    }
)

export const postTodos = createAsyncThunk(
    "todo/create",
    async function (content: string) {
        const res = await fetch("https://unicode-todo.onrender.com/todos", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                title: content
            }),
        })
        return await res.json()
    }
)

export const deleteTodos = createAsyncThunk(
    "todo/delete",
    async function (id: string) {
        await fetch(`https://unicode-todo.onrender.com/todos/${id}`, {
            method: "DELETE"
        })
        return id
    }
    )
    
    export const updateTodos = createAsyncThunk(
        "todo/update",
        async function (todo: ITodos) {
            const res = await fetch(`https://unicode-todo.onrender.com/todos/${todo._id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({
                    completed: !todo.completed
                }),
        })
        return await res.json()
    }
)
