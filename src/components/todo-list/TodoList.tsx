import { useAppSelector } from "../../hooks/hooks"
import "./TodoList.css"

const TodoList = () => {
    const { todos, isLoading } = useAppSelector(state => state.todos)

    if(isLoading) {
        return <h1>Loading...</h1>
    }
    
    return(
        <div className="todo-list">
            {todos.map(item => 
            <div className="todo-item" key={item._id}>
                <span>{item.title}</span>
            </div>
            )}
        </div>
    )
}

export default TodoList