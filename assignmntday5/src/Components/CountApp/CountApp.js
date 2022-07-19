import React,{ useReducer } from 'react'
import Decrement from './Decrement'
import Increment from './Increment'
import Reset from './Reset'
import { appContext } from '../../Context/AppContext'



  

export default function CountApp() {
    const initialState = 0;
    const reducer = (state, action) => {
        switch (action) {
            case "add":
                return state + 1;
            case "subtract":
                return state - 1;
            case "reset":
                return 0;
            default:
            throw new Error("Unexpected action");
        }
    };
 
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <appContext.Provider value={{count, dispatch}}>

            <h2>{count}</h2>
            <Increment/>
            <Decrement/>
            <Reset/>

        </appContext.Provider>
        

    </div>
  )
}
