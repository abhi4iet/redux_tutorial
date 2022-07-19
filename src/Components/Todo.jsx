import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodoError, addTodoLoading, addTodoSuccess, getTodoError, getTodoLoading, getTodoSuccess } from '../store/actions';

export const Todo = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const { loading, error, data } = useSelector(state => state.todos);


    console.log('rendering todos');

    const getTodos = () => {
        dispatch(getTodoLoading());
        axios({
            method: "get",
            url: "http://localhost:8000/todos"
        }).then(res => {
            console.log(res, "res");
            dispatch(getTodoSuccess(res.data));
        }).catch(err => {
            dispatch(getTodoError());
        })
    }

    useEffect(() => {
        getTodos()
    }, [])

    const handleAdd = () => {
        dispatch(addTodoLoading());
        axios({
            method: "post",
            url: "http://localhost:8000/todos",
            data: {
                title: text,
                status: false
            }
        }).then(res => {
            dispatch(addTodoSuccess());
            getTodos();
        }).catch(err => {
            dispatch(addTodoError());
        })
    }

    return (
        <div>
            <input placeholder='ADD Something' value={text} onChange={(e) => setText(e.target.value)} type="text" />
            <button onClick={handleAdd}>ADD</button>
            {
                loading ? <div>...loading</div>
                    : error ? <div>Something went wrong</div>
                        : data.map((el) => {
                            return <li key={el.id}>{el.title}</li>
                        })
            }
        </div>
    )
}
