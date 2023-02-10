import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import { bindActionCreators } from 'redux';


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

export async function loginRequest(email, password) {
  login(email, password);
  const response = await fetch('../../dist/login-success.json');
  const json = await response.json()
  if (json.success) {
    dispatch(loginSuccess());
  } else {
    dispatch(loginFailure());
  }
}

export const boundUIAction = () =>
  bindActionCreators({
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer
  }, dispatch)

