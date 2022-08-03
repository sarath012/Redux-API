import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  setActive,
  setCompleted,
  setIsActive,
  setIsComplete,
} from "./Store/todoSlice";

function App() {
  const active = useSelector((state) => state.todo.active);
  const completed = useSelector((state) => state.todo.completed);
  const isActive = useSelector((state) => state.todo.isActive);
  const isComplete = useSelector((state) => state.todo.isComplete);

  const dispatch = useDispatch();
  const [todo, setTodo] = useState(null);

  const handlesubmit = () => {
    dispatch(setActive(todo));
  };

  const handleAll = () => {
    dispatch(setIsActive(true));
    dispatch(setIsComplete(true));
  };

  const handleActive = () => {
    dispatch(setIsActive(true));
    dispatch(setIsComplete(false));
  };

  const handleCompleted = () => {
    dispatch(setIsActive(false));
    dispatch(setIsComplete(true));
  };

  // console.log(completed);

  return (
    <div className="App">
      <input
        type="text"
        className="todo-input"
        placeholder="Write todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handlesubmit}>Add todo</button>
      <br />
      <br />
      <br />
      <button onClick={handleAll}>All</button>
      <button onClick={handleActive}>Active</button>
      <button onClick={handleCompleted}>Completed</button>
      <div>
        {isActive &&
          active.map((item, index) => (
            <p
              key={index}
              onClick={() => dispatch(setCompleted({ item, index }))}
            >
              {item}
            </p>
          ))}
        {isComplete &&
          completed.map((item, index) => (
            <p key={index}>
              <s>{item}</s>
            </p>
          ))}
      </div>
    </div>
  );
}

export default App;
