import * as notifs from '../../notifications.json';

export default function getAllNotificationsByUser(userId) {
  const data = notifs.default.filter(
    (notif) => notif.author.id === userId
  );

  return data;
}
