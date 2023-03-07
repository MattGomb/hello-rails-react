import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetings/GreetingsSlice';

const Store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default Store;