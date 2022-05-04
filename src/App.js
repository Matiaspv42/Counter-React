import './style.css'
import React from 'react'
export default function App(){
    var [counter, setCounter] = React.useState(0)

    function addNumber(){
        setCounter(counter + 1)
    }

    function minusNumber(){
        setCounter(counter - 1)
    }
    
    return(
        <div className="counter">
        <button className="counter--minus" onClick={minusNumber}>–</button>
        <div className="counter--count" >
            <h1>{counter}</h1>
        </div>
        <button className="counter--plus" onClick={addNumber}>+</button>
        </div>
    )
}