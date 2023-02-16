import "./Input.css"
import plus from "../../assets/button-plus.svg"
import { useState } from "react"

const Input = () => {
    const [value, setValue] = useState("")

    const addTodo = () => {
        
    }

    return(
        <div className="input">
            <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Что вы планируете сделать?"/>
            <button onClick={addTodo}>Добавить<img src={plus} alt="" /></button>
        </div>
    )
}

export default Input