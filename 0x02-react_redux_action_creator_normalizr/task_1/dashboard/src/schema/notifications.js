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
  const data = notifs.default.filter(
    (notif) => notif.author.id === userId
  );

  return data;
}