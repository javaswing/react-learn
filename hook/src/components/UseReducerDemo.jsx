import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {...state, count:state.count + 1}
        default: 
            return state
    }
}


export function UseReducerDemo () {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    return (
        <div>
            <button onClick={() => dispatch({type: 'add'})}>+1</button>
              <p>Count: {state.count}</p>
        </div>
    )
}