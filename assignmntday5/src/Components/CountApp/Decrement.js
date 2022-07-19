import React, { useContext } from 'react'
import { appContext } from '../../Context/AppContext'

export default function Decrement() {
    const {count, dispatch} = useContext(appContext)
  return (
    <div>
        <button onClick={() => dispatch("subtract")}>
            Decrement
        </button>
    </div>
  )
}
