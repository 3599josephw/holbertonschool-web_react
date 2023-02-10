import { NotificationTypeFilters, MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATION_SUCCESS } from '../actions/notificationActionTypes';
import { notificationNormalizer } from '../schema/notifications';
const { Map } = require('immutable');


const initialState = Map({
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT
});

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATION_SUCCESS:
      return state.merge(notificationNormalizer(action.data));
    case MARK_AS_READ:
      return state.setIn([action.index, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
}