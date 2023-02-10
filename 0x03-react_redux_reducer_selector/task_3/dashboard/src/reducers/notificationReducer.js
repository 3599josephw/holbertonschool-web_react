import { NotificationTypeFilters, MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATION_SUCCESS } from '../actions/notificationActionTypes';


const initialState = {
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT
};

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATION_SUCCESS:
      const success = action.data.map((notification) => {
        return {
          ...notification, isRead: false
        }
      });
      return {
        filter: state.filter,
        notifications: success
      }
    case MARK_AS_READ:
      const notifs = state.notifications.map((notification) => {
        if (notification.id === action.index) {
          return {
            ...notification, isRead: true
          }
        }
        return notification;
      });
      return {
        filter: state.filter,
        notifications: notifs
      };
    case SET_TYPE_FILTER:
      return {
        filter: action.filter,
        notifications: state.notifications
      }
    default:
      return state;
  }
}