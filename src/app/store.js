import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/pokemon'
import { bookSlice } from '../services/bookSlice'
import { postSlice } from '../services/postSlice'

export const store = configureStore({
  // reducer: {
  //   counter: counterReducer,
  // },

  reducer: {
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [bookSlice.reducerPath]: bookSlice.reducer,
    [postSlice.reducerPath]: postSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([pokemonApi.middleware, bookSlice.middleware, postSlice.middleware]),
});

setupListeners(store.dispatch)
