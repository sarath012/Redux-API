import React, { useContext } from 'react'
import { appContext } from '../../Context/AppContext'

export default function Decrement() {
    const {count, handleIncrement, handleDecrement,handleReset} = useContext(appContext)
  return (
    <div>
        <button onClick={handleDecrement}>
            Decrement
        </button>
    </div>
  )
}
