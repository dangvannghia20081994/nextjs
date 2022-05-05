import { configureStore } from '@reduxjs/toolkit'
import appReducer from './app'
import userReducer from './user'
import modalReducer from "./modal";
export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    modal: modalReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})
export * from './app'
export * from './user'
export * from './modal'
export default store