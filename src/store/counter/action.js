import { ADD_COUNT, DEC_COUNT } from "./actionType"


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