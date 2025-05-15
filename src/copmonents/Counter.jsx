import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    if (count < 0) {
        setCount(0)
        alert('Count cannot be negative')
    }
  return (
    <div>
        <div className="">Counter: {count}</div>
        <button onClick={() => {
            setCount(count+10)
        }}>+10</button>
        <button onClick={() => {
            setCount(count+1)
        }}>+</button>
        <button onClick={() => {
            setCount(count-1)
        }}>-</button>
        <button onClick={() => {
            setCount(count-10)
        }}>-10</button>
    </div>
  )
}

export default Counter