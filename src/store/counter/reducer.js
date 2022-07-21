import { ADD_COUNT, DEC_COUNT } from "./actionType";

const initialState = {
    count: 0
}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_COUNT: 
        return {
            ...state,
            count: state.count + payload
        }

        case DEC_COUNT:
            return {
                ...state,
                count: state.count - payload
            }
    
        default:
            return state;
    }
}