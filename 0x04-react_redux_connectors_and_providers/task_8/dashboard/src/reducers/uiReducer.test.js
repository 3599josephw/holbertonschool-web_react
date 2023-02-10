import { uiReducer } from './uiReducer';
const { Map } = require('immutable');


describe('uiReducer', () => {
  it('the state returned by the uiReducer function equals the initial state when no action is passed', () => {
    const initialState = {
      isUserLoggedIn: false,
      user: {},
      isNotificationDrawerVisible: false,
    };
    expect(uiReducer(null, {}).toJS()).toEqual(initialState);
  });

  it('the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
    expect(uiReducer(null, { type: 'SELECT_COURSE', index: 0 }).toJS()).toEqual(Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    }).toJS());
  });

  it('when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    expect(uiReducer(null, { type: 'DISPLAY_NOTIFICATION_DRAWER' }).toJS()
    ).toEqual(Map({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    }).toJS(), { isNotificationDrawerVisible: true });
  });

  it('when the action HIDE_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    expect(uiReducer(undefined, { type: 'HIDE_NOTIFICATION_DRAWER' })).toEqual(Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    }).toJS(), { isNotificationDrawerVisible: false });
  });
});
