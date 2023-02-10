import { markAsRead, setNotificationFilter } from './notificationActionCreators';


describe('notificationActionCreators', () => {
  it('markAsRead returns correctly', () => {
    expect(markAsRead(1)).toEqual({
      type: 'MARK_AS_READ',
      index: 1,
    });
  });

  it('setNotificationFilter returns correctly', () => {
    expect(setNotificationFilter('default')).toEqual({
      type: 'SET_TYPE_FILTER',
      filter: 'DEFAULT',
    });
  });
});