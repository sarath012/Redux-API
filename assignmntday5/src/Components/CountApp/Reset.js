import React, { useContext } from 'react'
import { appContext } from '../../Context/AppContext'

export default function Reset() {
    const {handleReset} = useContext(appContext)
  return (
    <div>
        <button onClick={handleReset}>
            Reset
        </button>
    </div>
  )
}
