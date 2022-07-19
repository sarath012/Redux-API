import React, { useContext } from 'react'
import { appContext } from '../../Context/AppContext'

export default function Reset() {
    const {count, dispatch} = useContext(appContext)
  return (
    <div>
        <button onClick={() => dispatch("reset")}>
            Reset
        </button>
    </div>
  )
}
