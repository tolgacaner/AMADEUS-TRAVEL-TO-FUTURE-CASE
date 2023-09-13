import { configureStore } from '@reduxjs/toolkit'
import flightReducer from './flight/flightSlice'


export const store = configureStore({
  reducer: {
    flights: flightReducer,
  }
})
