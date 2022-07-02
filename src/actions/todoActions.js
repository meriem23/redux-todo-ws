import { TODO_ADD, TODO_DELETE, TODO_DONE, TODO_EDIT, TODO_FILTER, TODO_SAVE } from "./types"


export const todoDelete = (x) => {
    return {
        type: TODO_DELETE,
        payload: x
    }
}

export const todoDone = (x) => {
    return {
        type: TODO_DONE,
        payload: x
    }
}

export const todoAdd = (todo) => {
    return {
        type: TODO_ADD,
        payload: todo
    }
}

export const todoFilter = (filterValue) => {
    return {
        type: TODO_FILTER,
        payload: filterValue
    }
}

export const todoSave = (valueSave) => {
    return {
        type: TODO_SAVE,
        payload: valueSave
    }
}

export const todoEdit = (valueEdit) => {
    return {
        type: TODO_EDIT,
        payload: valueEdit
    }
}