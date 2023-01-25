import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe('uiActionCreators', () => {
  it('login returns correctly', () => {
    expect(login('test', 'test')).toEqual({
      type: 'LOGIN',
      user: {
        email: 'test',
        password: 'test'
      }
    });
  });

  it('logout returns correctly', () => {
    expect(logout()).toEqual({
      type: 'LOGOUT'
    });
  });

  it('displayNotificationDrawer returns correctly', () => {
    expect(displayNotificationDrawer('test', 'test')).toEqual({
      type: 'DISPLAY_NOTIFICATION_DRAWER',
    });
  });

  it('hideNotificationDrawer returns correctly', () => {
    expect(hideNotificationDrawer('test', 'test')).toEqual({
      type: 'HIDE_NOTIFICATION_DRAWER',
    });
  });
});