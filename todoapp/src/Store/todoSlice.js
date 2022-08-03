import { createSlice } from "@reduxjs/toolkit";

export const todoReducer = createSlice({
  //   name: "todo",
  //   initialState: {
  //     active: {
  //       actArray: [],
  //       completestatus: false,
  //     },
  //     completed: {
  //       compArray: [],
  //       completestatus: true,
  //     },
  //   },
  //   reducers: {
  //     setActive: (state, action) => {
  //       state.active.actArray.push(action.payload);
  //     },
  //     setCompleted: (state, action) => {
  //       state.active.actArray = state.active.actArray.filter((item,index) => index !== action.payload.index);
  //       state.completed.compArray.push(action.payload.item);
  //     },
  //   },
  // });

  name: "todo",
  initialState: {
    active: [],
    isActive: true,
    completed: [],
    isComplete: true,
  },
  reducers: {
    setActive: (state, action) => {
      state.active.push(action.payload);
    },
    setIsActive: (state, action) => {
      state.isActive = action.payload;
    },
    setCompleted: (state, action) => {
      state.active = state.active.filter(
        (item, index) => index !== action.payload.index
      );
      state.completed.push(action.payload.item);
    },
    setIsComplete: (state, action) => {
      state.isComplete = action.payload;
    },
  },
});

export const { setActive, setCompleted, setIsActive, setIsComplete } = todoReducer.actions;

export default todoReducer.reducer;
