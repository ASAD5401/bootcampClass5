import React, { useReducer } from 'react'
import Child from './child'
import Child2 from './childForReducer'

const Parent = () => {
    return (
        <div>
            <Child/>
            <Child2/>

        </div>
    )

}
export default Parent;