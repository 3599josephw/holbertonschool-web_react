import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
}

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state, isNotificationDrawerVisible: true
      };
    case HIDE_NOTIFICATION_DRAWER:
      return {
        ...state, isNotificationDrawerVisible: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state, isUserLoggedIn: true, user: action.user
      }
    case LOGIN_FAILURE:
      return {
        ...state, isUserLoggedIn: false, user: {}
      }
    case LOGOUT:
      return {
        ...state, isUserLoggedIn: false, user: {}
      }
    default:
      return state;
  }
}