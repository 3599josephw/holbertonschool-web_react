import React from 'react';
import PropTypes from 'prop-types';


NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func.isRequired
};

NotificationItem.defaultProps = {
  type: 'default',
};

function NotificationItem({type, html, value, markAsRead}) {
  if (!value) {
    return (
      <li data-priority={type} dangerouslySetInnerHTML={html} onClick={markAsRead}></li>
    );
  }
  return (
    <li data-priority={type} onClick={markAsRead}>
      {value}
    </li>
  );
}

export default NotificationItem;
