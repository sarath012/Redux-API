import React, { useContext } from 'react'
import { appContext } from '../../Context/AppContext'

export default function () {
    const {count, handleIncrement, handleDecrement,handleReset} = useContext(appContext)
  return (
    <div>
        <button onClick={handleIncrement}>
            Increment
        </button>
    </div>
  )
}
