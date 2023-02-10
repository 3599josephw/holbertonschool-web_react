import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import { createAsyncThunk } from '@reduxjs/toolkit';


export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password }
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  }
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  }
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  }
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE
  }
}

export const loginRequest = createAsyncThunk(LOGIN, async (args, store) => {
  // login(email, password);
  const response = await fetch('../../dist/login-success.json');
  if (response.status === 200) {
    store.dispatch(login(args.email, args.password));
    return () => store.dispatch(loginSuccess());
  } else {
    return () => store.dispatch(loginFailure());
  }
})

/*
export const boundUIAction = () =>
  bindActionCreators({
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer
  }, dispatch)
*/
