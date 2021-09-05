import React, { useReducer } from 'react'
import CounterReducer  from './CounterReducer'

const Child2=()=>{
    let [state,dispatch]=useReducer(CounterReducer,0)
    console.log(state)

    return(
        <div>
            <h1>Value of Reducer is : {state}</h1>
            <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
            <button onClick={()=>dispatch('DECREMENT')}>Decrement Reducer</button>


        </div>
    )
}

export default Child2;