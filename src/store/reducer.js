import { ADD_COUNT, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, DEC_COUNT, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS } from "./actionTypes";

const initialState = {
    count : 0,
    todos : {
        loading : false,
        error: false,
        data: []
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUNT: 
        return {
            ...state,
            count: state.count + action.payload
        }

        case DEC_COUNT:
            return {
                ...state,
                count: state.count - action.payload
            }
        case ADD_TODO_LOADING:
            return {
                ...state,
                todos : {
                    ...state.todos,
                    loading: true
                }
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos : {
                    ...state.todos,
                    loading: false,
                    error: false
                }
            }
        case ADD_TODO_ERROR:
            return {
                ...state,
                todos : {
                    ...state.todos,
                    loading: false,
                    error: true
                }
            }
        case GET_TODO_LOADING:
            return {
                ...state,
                todos : {
                    ...state.todos,
                    loading: true
                }
            }
        case GET_TODO_SUCCESS:
            return {
                ...state,
                todos : {
                    ...state.todos,
                    loading: false,
                    error: false,
                    data: action.payload
                }
            }
        case GET_TODO_ERROR:
            return {
                ...state,
                todos : {
                    ...state.todos,
                    loading: false,
                    error: true,
                }
            }
    
        default:
            return {...state};
    }
}