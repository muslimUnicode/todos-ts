import { ITodos } from "../../types/ITodos"

export const CreatedAt = (todo: ITodos) => {
    return(
        (+Date.now() - +todo.created_at) < 60000
        ?
        <div className="todo-item-span">
            <span className="span-not-completed">{todo.title}.</span>
            <span className="created-at">только что</span>
        </div>
        : (+Date.now() - +todo.created_at) < 60000 * 60
        ? 
        <div className="todo-item-span">
            <span className="span-not-completed">{todo.title}.</span>
            <span className="created-at">{Math.ceil((+Date.now() - +todo.created_at) / 60000)} минут назад</span>
        </div>
        : (+Date.now() - +todo.created_at) < 60000 * 60 * 24
        ? 
        <div className="todo-item-span">
            <span className="span-not-completed">{todo.title}.</span>
            <span className="created-at">{Math.ceil((+Date.now() - +todo.created_at) / (60000 * 60))} часов назад</span>
        </div> 
        :
        <div className="todo-item-span">
            <span className="span-not-completed">{todo.title}</span>
            <span className="created-at">{Math.ceil((+Date.now() - +todo.created_at) / (60000 * 60 * 24))} дней назад</span>
        </div>
    )
}
