import React, { useContext } from 'react'
import { appContext } from '../../Context/AppContext'

export default function () {
    const {count, dispatch} = useContext(appContext)
  return (
    <div>
        <button onClick={() => dispatch("add")}>
            Increment
        </button>
    </div>
  )
}
