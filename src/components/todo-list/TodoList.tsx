import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import "./TodoList.css"
import trashIcon from "../../assets/trash-icon.svg"
import { deleteTodos, updateTodos } from "../../store/reducers/user/todoAction"
import { ITodos } from "../../types/ITodos"
import emptyList from "../../assets/empty-list.svg"

const TodoList = () => {
    const { todos, isLoading, loadingAddTodo, loadingDeleteTodo } = useAppSelector(state => state.todos)
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
            {
                todos.length === 0
                ? <div className="empty-list">
                    <img src={emptyList} alt=""/>
                    <p>У вас пока нет добавленных задач</p>
                </div>
                : todos.map(item => 
                <div className="todo-item" key={item._id}>
                    <label className="checkbox style-d">
                        <input type="checkbox" onChange={() => completeItem(item)} checked={item.completed}/>
                        <div className="checkbox__checkmark"></div>
                    </label>
                    {
                        item.completed
                        ? <span className="span-completed">{item.title}.</span>
                        : (+Date.now() - +item.created_at) < 60000
                        ?
                        <div className="todo-item-span">
                            <span className="span-not-completed">{item.title}.</span>
                            <span className="created-at">только что</span>
                        </div>
                        : (+Date.now() - +item.created_at) < 60000 * 60
                        ? 
                        <div className="todo-item-span">
                            <span className="span-not-completed">{item.title}.</span>
                            <span className="created-at">{Math.ceil((+Date.now() - +item.created_at) / 60000)} минут назад</span>
                        </div>
                        : (+Date.now() - +item.created_at) < 60000 * 60 * 24
                        ? 
                        <div className="todo-item-span">
                            <span className="span-not-completed">{item.title}.</span>
                            <span className="created-at">{Math.ceil((+Date.now() - +item.created_at) / (60000 * 60))} часов назад</span>
                        </div> 
                        :
                        <div className="todo-item-span">
                            <span className="span-not-completed">{item.title}</span>
                            <span className="created-at">{Math.ceil((+Date.now() - +item.created_at) / (60000 * 60 * 24))} дней назад</span>
                        </div>
                    }
                    {
                    
                    }
                    
                    {
                    loadingDeleteTodo.length !== 0 && loadingDeleteTodo === item._id
                    ? <div className="load"></div>
                    : <img src={trashIcon} alt="" onClick={() => removeItem(item._id)}/>
                    }
                </div>
            )}
        </div>
    )
}

export default TodoList