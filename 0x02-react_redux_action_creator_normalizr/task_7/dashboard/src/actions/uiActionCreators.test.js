import { login, logout, displayNotificationDrawer, hideNotificationDrawer,
  loginSuccess, loginFailure, loginRequest, } from './uiActionCreators';
import fetchMock from 'jest-fetch-mock';


fetchMock.enableMocks();

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

  it('loginRequest returns correctly', async () => {
    fetch.mockResponseOnce('tests');
    const response = await loginRequest('test', 'test')
    expect(response).toEqual({ type: 'LOGIN_SUCCESS' });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('loginRequest returns correctly', async () => {
    const response = await loginRequest('test', 'test')
    expect(response).toEqual({ type: 'LOGIN_FAILURE' });
    expect(fetch).toHaveBeenCalledTimes(2);
  });
});