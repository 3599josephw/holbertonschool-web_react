import * as notifs from '../../notifications.json';
import { normalize, schema } from 'normalizr';


const user = new schema.Entity("users");
const message = new schema.Entity('messages', {}, {idAttribute: 'guid'});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
})
export const norm = normalize(notes, [notification]);

export function getAllNotificationsByUser(userId) {
  const data = Object.values(norm.entities.notifications).filter((notif) => notif.author === userId)
  .map((notif) => norm.entities.message[notif.context]);

  return data;
}

export function notificationNormalizer(data) {
  return normalize(data, [notification])
}
