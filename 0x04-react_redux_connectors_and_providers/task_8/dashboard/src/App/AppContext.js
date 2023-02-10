import { createContext } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';


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
  reducer: rootReducer,
  preloadedState: {
    courses: rootReducer.courses(undefined, {}),
    notes: rootReducer.notes(undefined, {}),
    ui: rootReducer.ui(undefined, {}),
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
