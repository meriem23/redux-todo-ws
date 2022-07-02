import { useDispatch } from 'react-redux'
import { todoFilter } from '../actions/todoActions'

const FilterTodo = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <form >
                <input
                    type="radio"
                    onChange={(e) => dispatch(todoFilter(e.target.value))}
                    name="filterTodo"
                    value="no-filter"
                />
                <label>All</label>
                <input
                    type="radio"
                    onChange={(e) => dispatch(todoFilter(e.target.value))}
                    name="filterTodo"
                    value="done"
                />
                <label>Done</label>
                <input
                    type="radio"
                    onChange={(e) => dispatch(todoFilter(e.target.value))}
                    name="filterTodo"
                    value="not-done"
                />
                <label>Not Done</label>
            </form>
        </div>
    )
}

export default FilterTodo