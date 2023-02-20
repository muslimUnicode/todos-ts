import { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './hooks/hooks';
import { getTodos } from './store/reducers/user/todoAction';
import Logo from './components/logo/Logo';
import Input from './components/input/Input';
import TodoList from './components/todo-list/TodoList';

function App() {
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(getTodos())
    }, [])
    
    return (
        <div className="app">
            <Logo/>
            <Input/>
            <TodoList/>
        </div>
    );
}

export default App;
