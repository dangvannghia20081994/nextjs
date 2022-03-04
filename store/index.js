import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})
export * from './user'
export default store