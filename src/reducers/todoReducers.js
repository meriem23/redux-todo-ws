import { v4 as uuidv4 } from 'uuid';
import { TODO_ADD, TODO_DELETE, TODO_DONE, TODO_EDIT, TODO_FILTER, TODO_SAVE } from '../actions/types';
const initState = [
    { id: uuidv4(), title: "Shopping", isDone: false },
    { id: uuidv4(), title: "Working out", isDone: false }
]


const todoReducer = (state = { initState, filter: "no-filter", save: null }, { type, payload }) => {
    switch (type) {
        case TODO_DELETE:
            return { ...state, initState: state.initState.filter((el) => el.id !== payload) }
        case TODO_DONE:
            return {
                ...state, initState: state.initState.map((el) => el.id === payload ? { ...el, isDone: !el.isDone } : el)
            }
        case TODO_ADD:
            return {
                ...state, initState: [...state.initState, { id: uuidv4(), title: payload, isDone: false }]
            }
        case TODO_FILTER:
            return {
                ...state, filter: payload
            }
        case TODO_SAVE:
            return {
                ...state, save: payload
            }
        case TODO_EDIT:
            return {
                ...state, initState: state.initState.map((el) => el.id === state.save.id ? { ...el, title: payload } : el), save: null
            }
        default:
            return state
    }
}

export default todoReducer