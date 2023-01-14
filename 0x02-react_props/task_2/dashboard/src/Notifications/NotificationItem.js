import React from 'react';

function NotificationItem({type, html, value}) {
  if (!value) {
    return (
      <li data-priority={type} dangerouslySetInnerHTML={html}></li>
    );
  }
  return (
    <li data-priority={type}>
      {value}
    </li>
  );
}

export default NotificationItem;
