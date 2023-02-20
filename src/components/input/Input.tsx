import "./Input.css"
import plus from "../../assets/button-plus.svg"
import { useState } from "react"
import { postTodos } from "../../store/reducers/user/todoAction"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"

const Input = () => {
    const { loadingAddTodo } = useAppSelector(state => state.todos)
    const [value, setValue] = useState("")
    const dispatch = useAppDispatch()

    const addTodo = (value: string) => {
        dispatch(postTodos(value))
        setValue("")
    }

    return(
        <div className="input">
            <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Что вы планируете сделать?"/>
            <div onClick={() => addTodo(value)} className="button">Добавить{loadingAddTodo ? <div className="load"></div> :<img src={plus} alt="" />}</div>
        </div>
    )
}

export default Input