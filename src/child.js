import React, { useContext } from 'react'
import counterContext from './CounterContext'
const Child=()=>{
    let counterValue =useContext(counterContext)
    console.log(counterValue)

    return (
        <div>
            <h1>Value of CounterContext is : {counterValue[0]}</h1>
            <button onClick={()=>{counterValue[1](++counterValue[0])}}>Increment Context</button>
            <button onClick={()=>{counterValue[1](--counterValue[0])}}>Decrement Context</button>

        </div>
    )

}

export default Child;