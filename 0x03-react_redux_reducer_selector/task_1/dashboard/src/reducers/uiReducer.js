import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
const { Map } = require('immutable');


const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
})

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set({
        ...state, isNotificationDrawerVisible: true
      });
    case HIDE_NOTIFICATION_DRAWER:
      return state.set({
        ...state, isNotificationDrawerVisible: false
      });
    case LOGIN_SUCCESS:
      return state.set({
        ...state, isUserLoggedIn: true, user: action.user
      })
    case LOGIN_FAILURE:
      return state.set({
        ...state, isUserLoggedIn: false, user: {}
      })
    case LOGOUT:
      return state.set({
        ...state, isUserLoggedIn: false, user: {}
      })
    default:
      return state;
  }
}