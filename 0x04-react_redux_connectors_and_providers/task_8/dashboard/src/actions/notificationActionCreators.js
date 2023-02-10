import { NotificationTypeFilters, MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE, FILTERS, FETCH_NOTIFICATION_SUCCESS } from './notificationActionTypes';
import { bindActionCreators } from 'redux';
import { createAsyncThunk } from '@reduxjs/toolkit';


export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index: index
  }
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter: NotificationTypeFilters[filter.toUpperCase()]
  }
}

export function setLoadingState(loading) {
  return {
    type: SET_LOADING_STATE,
    loading
  }
}

export function setNotifications(array) {
  return {
    type: FETCH_NOTIFICATION_SUCCESS,
    array
  }
}

export const fetchNotifications = createAsyncThunk(
  async(args, store) => {
    store.dispatch(setLoadingState(true));
    const result = await fetch('../../dist/notifications.json');
    const json = await result.json()
    if (json.success){
      store.dispatch(setNotifications(json))
    }
    store.dispatch(setLoadingState(false))
  }
)


/*
export const boundNotificationAction = () =>
  bindActionCreators({
    markAsRead,
    setNotificationFilter
  }, dispatch)
*/
