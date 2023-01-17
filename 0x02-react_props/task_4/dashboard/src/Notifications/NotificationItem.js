import React from 'react';
import PropTypes from 'prop-types';


NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
};

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
