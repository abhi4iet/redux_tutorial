import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer as counterReducer } from "./counter/reducer";
import { reducer as todoReducer } from "./todo/reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer
})

const midd1 = (store) => (next) => (action) => {
    console.log("midd 1", action, store);
    if(typeof action === "function"){
        action(store.dispatch);
    }else {
        next(action)
    }
    console.log("exiting midd1")
}

const midd2 = (store) => (next) => (action) => {
    console.log("midd 2", action.type);
    next(action)
    console.log("exiting  midd2");
}

export const store = createStore(rootReducer,
    compose(applyMiddleware(midd1, midd2), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
