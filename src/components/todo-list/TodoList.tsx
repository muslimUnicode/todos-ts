import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import "./TodoList.css"
import trashIcon from "../../assets/trash-icon.svg"
import { deleteTodos, updateTodos } from "../../store/reducers/user/todoAction"
import { ITodos } from "../../types/ITodos"

const TodoList = () => {
    const { todos, isLoading } = useAppSelector(state => state.todos)
    const dispatch = useAppDispatch()
    const completedTodos = todos.filter(todo => todo.completed)

    const removeItem = (id: string) => {
        dispatch(deleteTodos(id))
    }

    const completeItem = (todo: ITodos) => {
        dispatch(updateTodos(todo))
    }
    
    return(
        <div className="todo-list">
            <div className="counters">
                <div className="all-count">
                    <span>Всего задач</span>
                    <div>{todos.length}</div>
                </div>
                <div className="completed-count">
                    <span>Выполнено</span>
                    <div>{completedTodos.length} из {todos.length}</div>
                </div>
            </div>
            {todos.map(item => 
            <div className="todo-item" key={item._id}>
                <label className="checkbox style-d">
                    <input type="checkbox" onChange={() => completeItem(item)} checked={item.completed}/>
                    <div className="checkbox__checkmark"></div>
                </label>
                <span>{item.title}</span>
                <img src={trashIcon} alt="" onClick={() => removeItem(item._id)}/>
            </div>
            )}
        </div>
    )
}

export default TodoList