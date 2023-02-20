import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { deleteTodos, updateTodos } from "../../store/reducers/user/todoAction"
import { ITodos } from "../../types/ITodos"
import trashIcon from "../../assets/trash-icon.svg"
import "./Todo.css"
import { CreatedAt } from "./CreatedAt"

const Todo = () => {
    const { todos, loadingDeleteTodo } = useAppSelector(state => state.todos)
    const dispatch = useAppDispatch()
    const completeItem = (todo: ITodos) => {
        dispatch(updateTodos(todo))
    }
    const removeItem = (id: string) => {
        dispatch(deleteTodos(id))
    }
    
    return(
        <div className="todo">
            {todos.map(item => 
                <div className="todo-item" key={item._id}>
                    <label className="checkbox style-d">
                        <input type="checkbox" onChange={() => completeItem(item)} checked={item.completed}/>
                        <div className="checkbox__checkmark"></div>
                    </label>
                    {
                        item.completed
                        ? <span className="span-completed">{item.title}.</span>
                        : CreatedAt(item)
                    }
                    {
                        loadingDeleteTodo.length !== 0 && loadingDeleteTodo === item._id
                        ? <div className="load"></div>
                        : <img src={trashIcon} alt="" onClick={() => removeItem(item._id)}/>
                    }
                </div>
                ).reverse()
            }
        </div>
    )
}

export default Todo