import React, { useState } from 'react'

import './Counter.css'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const handleOnClick = operator => {
    let newValue = operator === '+' 
    ? counter + 1 
    : counter -1
    
    setCounter(newValue)
  }

  return (
    <div className='contant-counter'>
      <div className='counter'>
        <span>{counter}</span>
        <button onClick={() => handleOnClick('-')}>-</button>
        <button onClick={() => handleOnClick('+')}>+</button>
      </div>
    </div>
  )
}

export default Counter;
