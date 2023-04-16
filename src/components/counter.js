import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { decrementCounter, incrementCounter, resetCounter } from "../services/actions/counterAction";

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(incrementCounter());
    }
    const handleReset = () => {
        dispatch(resetCounter());
    }
    const handleDecrement = () => {
        if (count > 0) {
            dispatch(decrementCounter());
        }
    }

    const decrementBtnDisabled = count <= 0;
    
    return (
        <div className="container">
            <h2>Counter App</h2>
            <h3>Count: {count}</h3>
            <div className="buttons">
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleReset}>Reset</button>
                <button
                    onClick={handleDecrement}
                    disabled={decrementBtnDisabled}
                    className={decrementBtnDisabled ? 'disabled' : ''}
                >-</button>
            </div>
        </div>
    )
}

export default Counter;
