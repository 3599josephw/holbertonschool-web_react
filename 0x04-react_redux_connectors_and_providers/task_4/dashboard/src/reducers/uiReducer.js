import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
const { Map } = require('immutable');


const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
})

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER: {
      return {
        ...state,
        ui: state.ui.set('isNotificationDrawerVisible', true)
      }
    }
    case HIDE_NOTIFICATION_DRAWER: {
      return {
        ...state,
        ui: state.ui.set('isNotificationDrawerVisible', false)
      }
      }
    case LOGIN_SUCCESS:
      return {...state,
        ui: state.ui
          .setIn(['user', 'isLoggedIn'], true)
          .set('isUserLoggedIn', true),
      };
    case LOGIN_FAILURE: {
      return state.ui.set({
        ...state,
        isUserLoggedIn: false,
      })
    }
    case LOGOUT:
      return {...state,
        ui: state.ui
          .setIn(['user', 'email'], '')
          .setIn(['user', 'password'], '')
          .setIn(['user', 'isLoggedIn'], false)
          .set('isUserLoggedIn', false),
      };
    case LOGIN:
      return {...state,
        ui: state.ui
          .setIn(['user', 'email'], action.user.email)
          .setIn(['user', 'password'], action.user.password)
      };
    default:
      return state;
  }
}