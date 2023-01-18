import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  default: {
    color: '#1D0563',
  },
  urgent: {
    color: 'red',
  },
});

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
      <li className={css(type === 'default' ? styles.default : styles.urgent)} data-priority={type} dangerouslySetInnerHTML={html} onClick={markAsRead}></li>
    );
  }
  return (
    <li className={css(type === 'default' ? styles.default : styles.urgent)} data-priority={type} onClick={markAsRead}>
      {value}
    </li>
  );
}

export default memo(NotificationItem);
