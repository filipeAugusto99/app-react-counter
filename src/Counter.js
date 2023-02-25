import React, { useState, useEffect } from 'react'

import Template from './Template'
import './Counter.css'

// useEffect

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [test, setTest] = useState('teste')

  useEffect(() => {
    console.log('estado alterado')
  }, [])

  useEffect(() => {
    console.log('renderizando contador')
  }, )

  const handleOnClick = operator => {
    let newValue = operator === '+' 
    ? counter + 1 
    : counter -1
    
    setCounter(newValue)
  }

  return (

    <Template title="Contador">
      <div className='contant-counter'>
        <div className='counter'>
          <span>{counter}</span>
          <button onClick={() => handleOnClick('-')}>-</button>
          <button onClick={() => handleOnClick('+')}>+</button>
          <button onClick={() => setTest('otherValue')}>TESTE</button>
        </div>
      </div>
    </Template>
  )
}

export default Counter;
