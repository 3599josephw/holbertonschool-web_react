import { uiReducer } from './uiReducer';


describe('uiReducer', () => {
  it('the state returned by the uiReducer function equals the initial state when no action is passed', () => {
    const initialState = {
      isUserLoggedIn: false,
      user: {},
      isNotificationDrawerVisible: false,
    };
    expect(uiReducer(null, {})).toEqual(initialState);
  });

  it('the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
    expect(uiReducer(null, { type: 'SELECT_COURSE' })).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    expect(uiReducer(null, { type: 'DISPLAY_NOTIFICATION_DRAWER' })
    ).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('when the action HIDE_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    expect(uiReducer(undefined, { type: 'HIDE_NOTIFICATION_DRAWER' })).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });
});
