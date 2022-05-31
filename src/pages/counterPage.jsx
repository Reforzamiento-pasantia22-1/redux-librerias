import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {counterActions} from "../store/counterSlice.js";

const CounterPage = () => {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    
    const increment = () => {
        dispatch(counterActions.increment());
    }
    const decrement = () => {
        dispatch(counterActions.decrement());
    }
    const addBy = () => {
        dispatch(counterActions.add(10));
    }

    return (
        <div>
            <h1>Counte app</h1>
            <p>{counter.counter}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={addBy}>Add 10</button>
        </div> 
    );
}

export default CounterPage;

/*
    const increment = () => {
        dispatch({type: "INCREMENT"});
    }

    const decrement = () => {
        dispatch({type: "DECREMENT"});
    }

    const addBy = () => {
        dispatch({type: "ADD", payload: 10});
    }*/