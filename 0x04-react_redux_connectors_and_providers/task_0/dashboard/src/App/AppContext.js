import { createContext } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../reducers/uiReducer';


const user = {
  email: '',
  password: '',
  isLoggedIn: false
}

function logOut() {};

export const store = configureStore({
  reducer: uiReducer,
  preloadedState: {
    ui: uiReducer(undefined, {}),
  }
});

const AppContext = createContext({
  user,
  logOut,
  store
});

export default AppContext;