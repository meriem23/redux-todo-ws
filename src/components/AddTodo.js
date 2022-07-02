import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { todoAdd, todoEdit } from '../actions/todoActions'

const AddTodo = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const save = useSelector((state) => state.todoReducer.save)
    useEffect(() => {
        if (save) setInput(save.title)
        else setInput("")
    }, [save])
    console.log(input);
    return (
        <div>
            <input type="text" value={input} name="input" placeholder='Write your todo' onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => {
                if (save) { dispatch(todoEdit(input)) }
                else { dispatch(todoAdd(input)); setInput("") }

            }}>{save ? "save" : 'add'}</button>
        </div >
    )
}

export default AddTodo