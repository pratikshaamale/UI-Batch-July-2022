import { configureStore } from '@reduxjs/toolkit';
import countReducer from './CounterReducer';
import NameReducer from './NameReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  count: countReducer,
  names:NameReducer

})


export const store = configureStore({
  reducer: rootReducer
  
});

