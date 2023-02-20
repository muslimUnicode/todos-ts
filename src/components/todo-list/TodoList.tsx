import { useAppSelector } from "../../hooks/hooks"
import "./TodoList.css"
import emptyList from "../../assets/empty-list.svg"
import Todo from "../todo/Todo"

const TodoList = () => {
    const { todos } = useAppSelector(state => state.todos)
    const completedTodos = todos.filter(todo => todo.completed)
    
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
                : <Todo/>
            }
        </div>
    )
}

export default TodoList