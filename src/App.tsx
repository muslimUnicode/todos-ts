import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { getTodos } from './store/reducers/user/todoAction';

function App() {
    const dispatch = useAppDispatch()
    const { todos, isLoading } = useAppSelector(state => state.todos)

    useEffect(() => {
        dispatch(getTodos())
    })

    if(isLoading) {
        <h1>Loading...</h1>
    }
    return (
        <div className="app">
            {todos.map(item => <pre key={item.id}>{JSON.stringify(item)}</pre>)}
        </div>
    );
}

export default App;
