import React, { useState, useEffect } from 'react'

import './Counter.css'

// useEffect

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [test, setTest] = useState('teste')

  useEffect(() => {
    console.log('estado alterado')
  }, [test])

  useEffect(() => {
    console.log('renderizando contador')
  }, [counter])

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
        <button onClick={() => setTest('otherValue')}>TESTE</button>
      </div>
    </div>
  )
}

export default Counter;
