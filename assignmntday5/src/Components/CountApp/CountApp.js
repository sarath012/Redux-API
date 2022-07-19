import React,{ useReducer } from 'react'
import Decrement from './Decrement'
import Increment from './Increment'
import Reset from './Reset'
import { appContext } from '../../Context/AppContext'



  

export default function CountApp() {
    const initialState = 0;
    const reducer = (state, action) => {
        switch (action.type) {
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
    
    const handleIncrement = () =>{
        dispatch ({type: 'add'})
    }
    const handleDecrement = () =>{
        dispatch ({type: 'subtract'})
    }
    const handleReset = () =>{
        dispatch ({type: 'reset'})
    }

    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <appContext.Provider value={{handleIncrement, handleDecrement,handleReset}}>

            <h2>{count}</h2>
            <Increment/>
            <Decrement/>
            <Reset/>

        </appContext.Provider>
        

    </div>
  )
}
