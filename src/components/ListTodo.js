import { useSelector, useDispatch } from "react-redux"
import { todoDelete, todoDone, todoSave } from "../actions/todoActions"


const handleFilter = (X, valueFilter) => {
    switch (valueFilter) {
        case "done":
            return X.filter((el) => el.isDone == true)

        case "not-done":
            return X.filter((el) => el.isDone == false)
        default:
            return X
    }
}
const ListTodo = () => {
    const list = useSelector((state) => state.todoReducer.initState)
    const filterValue = useSelector((state) => state.todoReducer.filter)
    const result = handleFilter(list, filterValue)
    const dispatch = useDispatch()
    return (
        <div>
            {result.map((el, index) =>
                <div key={index}>
                    <p className={el.isDone ? "done" : ""}>{el.title}</p>
                    <button onClick={() => dispatch(todoDelete(el.id))}>delete</button>
                    <button onClick={() => dispatch(todoDone(el.id))}>{el.isDone ? "Undone" : "Done"}</button>
                    <button onClick={() => dispatch(todoSave(el))}>edit</button>
                </div>

            )}
        </div>
    )
}

export default ListTodo