import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodoError, addTodoLoading, addTodoSuccess, deleteTodoError, deleteTodoLoading, deleteTodoSuccess, getTodoError, getTodoLoading, getTodos, getTodoSuccess, patchTodoError, patchTodoLoading, patchTodoSuccess } from '../store/todo/actions';

export const Todo = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const { loading, error, data } = useSelector(state => state.todo.todos);


    console.log('rendering todos');


    useEffect(() => {
        dispatch(getTodos());
    }, [])

    const handleAdd = () => {
        setText("");
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
            dispatch(getTodos());
        }).catch(err => {
            dispatch(addTodoError());
        })
    }
    const handleToggle = (id, status) => {
        dispatch(patchTodoLoading());
        axios({
            method: "patch",
            url: `http://localhost:8000/todos/${id}`,
            data: {
                status: !status
            }
        }).then(res => {
            dispatch(patchTodoSuccess());
            dispatch(getTodos());
        }).catch(err => {
            dispatch(patchTodoError());
        })
    }
    const handleDelete = (id) => {
        dispatch(deleteTodoLoading());
        axios({
            method: "delete",
            url: `http://localhost:8000/todos/${id}`
        }).then(res => {
            dispatch(deleteTodoSuccess());
            dispatch(getTodos());
        }).catch(err => {
            dispatch(deleteTodoError());
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
                            return <li style={{ listStyle: "none", marginBottom: "15px" }} key={el.id}>
                                <div>{el.title}</div>
                                <div>
                                    <button onClick={() => handleToggle(el.id, el.status)}>{el.status ? "Done" : "Not Done"}</button>
                                    <button onClick={() => handleDelete(el.id)}>Delete</button>
                                </div>
                            </li>
                        })
            }
        </div>
    )
}
