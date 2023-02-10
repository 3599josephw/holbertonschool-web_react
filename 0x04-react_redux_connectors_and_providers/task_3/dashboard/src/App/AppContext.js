import { createContext } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../reducers/uiReducer';


const user = {
  email: '',
  password: '',
  isLoggedIn: false
}

function logOut() {
  this.setState({
    user: {
      email: '',
      password: '',
      isLoggedIn: false,
    }
  });
  this.context.user = {
    email: '',
    password: '',
    isLoggedIn: false,
  };
};

export const store = configureStore({
  reducer: uiReducer,
  preloadedState: {
    ui: uiReducer(undefined, {}),
  },
  middleware: (getDefault) => getDefault({
    serializableCheck: false,
  })
});

const AppContext = createContext({
  user,
  logOut,
  store
});

export default AppContext;
