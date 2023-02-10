import { Map, getIn } from 'immutable';


export function filterTypeSelected(state) {
  state.filter;
}

export function getNotifications(state) {
  getIn(Map(state), ['notifications']);
}

export function getUnreadNotifications(state) {
  getIn(Map(state), ['notifications']).filter((notification) => notification.isRead === false);
}
