import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from './todoSlice'

export default configureStore({
  reducer: {
    todo: TodoReducer,
}
})

