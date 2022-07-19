import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCnt, decCnt } from '../store/actions';

export const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);
    // let count = 0;
    console.log("rendering counter");

    const handleInc = () => {
        dispatch(addCnt(5));
    }
    const handleDec = () => {
        dispatch(decCnt(10))
    }

  return (
    <>
    <div>{count}</div>
    <button onClick={handleInc} >INC</button>
    <button onClick={handleDec} >DEC</button>
    </>
  )
}
