import { ADD_COUNT, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, DEC_COUNT, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS } from "./actionTypes"

export const addCnt = (payload) => {
    return {
        type: ADD_COUNT,
        payload
    }
}
export const decCnt = (payload) => {
    return {
        type: DEC_COUNT,
        payload
    }
}

export const addTodoLoading = () => {
    return {
        type: ADD_TODO_LOADING
    }
}
export const addTodoSuccess = () => {
    return {
        type: ADD_TODO_SUCCESS
    }
}
export const addTodoError = () => {
    return {
        type: ADD_TODO_ERROR
    }
}
export const getTodoLoading = () => {
    return {
        type: GET_TODO_LOADING
    }
}
export const getTodoSuccess = (payload) => {
    return {
        type: GET_TODO_SUCCESS,
        payload
    }
}
export const getTodoError = () => {
    return {
        type: GET_TODO_ERROR
    }
}