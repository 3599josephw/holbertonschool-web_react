import { fetchNotifications, markAsRead, setNotificationFilter} from '../actions/notificationActionCreators';
import { notificationReducer } from './notificationReducer';


const initialState = {
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT
};

const notificationsList = {
  test: [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New data available' },
  ],
};

describe('notificationReducer', () => {
  it('filters', () => {
    const filter = 'DEFAULT';
    const action = setNotificationFilter(filter);
    const state = notificationReducer(initialState, action);
    expect(state.get('filter')).toEqual(filter);
  });

  it('marks notification as read', () => {
    const action = {
      type: 'MARK_AS_READ',
      index: 2,
    };
    expect(notificationReducer(action, notificationsList.test)).toEqual(
      markAsRead(2)
    );
  });

  it('fetches list of notifications', () => {
    const result = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    };
    const action = fetchNotifications(notificationsList.test);
    expect(notificationReducer(initialState, action)).toEqual(result);
  });
});