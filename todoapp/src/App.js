import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [addTodo,setAddtodo] = useState("");
  const handleSubmit=()=>{

  }

  return (
    <div className="App">
      <input type="text" className='todo-input' placeholder='Write todo' value={addTodo} onChange={(e)=>setAddtodo(e.target.value)}/>
      <br/>
      <button onClick={handleSubmit}>Add todo</button>
      <br/><br/>
      <button>All</button>
      <button>Active</button>     
      <button>Completed</button>
      <div>


      </div>
    </div>
  );
}

export default App;
