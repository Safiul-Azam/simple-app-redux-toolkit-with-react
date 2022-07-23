import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increaseByAmount, increment, reset } from './counterSlice';


const CounterView = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>counter Reducer</h2>
            <h3>count : {count}</h3>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>
            <button onClick={()=>{dispatch(decrement())} }>Decrement</button>
            <button onClick={()=>{dispatch(reset())}}>Reset</button>
            <button onClick={()=>{dispatch(increaseByAmount(5))}}>Increment by 5</button>
        </div>
    );
};

export default CounterView;