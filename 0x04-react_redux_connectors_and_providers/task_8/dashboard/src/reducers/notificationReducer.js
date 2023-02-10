import { NotificationTypeFilters, MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATION_SUCCESS } from '../actions/notificationActionTypes';
import { notificationNormalizer } from '../schema/notifications';
const { Map } = require('immutable');


const initialState = Map({
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
  loading: false
});

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATION_SUCCESS:
      return state.mergeDeep({
        notifications: Object.values(normalized.entities.messages)
          .map((note) => ({
            id: note.guid,
            value: note.value,
            type: note.type,
            isRead: note.isRead,
          }))
      });
    case MARK_AS_READ:
      return Map(state).setIn([(action.index).toString(), 'isRead'],true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case SET_LOADING_STATE:
      return state.set('loading', action.loading);
    default:
      return state;
  }
}