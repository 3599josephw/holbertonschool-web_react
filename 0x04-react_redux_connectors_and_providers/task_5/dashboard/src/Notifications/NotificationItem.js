import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  default: {
    color: '#1D0563',
    borderBottom: '2px solid black',
    marginBottom: '10px',
    paddingBottom: '5px',
    listStyleType: 'none',
  },
  urgent: {
    color: 'red',
    borderBottom: '2px solid black',
    marginBottom: '10px',
    paddingBottom: '5px',
    listStyleType: 'none',
  },
});

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  markNotificationAsRead: PropTypes.func.isRequired
};

NotificationItem.defaultProps = {
  type: 'default',
};

function NotificationItem({type, html, value, markNotificationAsRead}) {
  if (!value) {
    return (
      <li className={css(type === 'default' ? styles.default : styles.urgent)} data-priority={type} dangerouslySetInnerHTML={html} onClick={markNotificationAsRead}></li>
    );
  }
  return (
    <li className={css(type === 'default' ? styles.default : styles.urgent)} data-priority={type} onClick={markNotificationAsRead}>
      {value}
    </li>
  );
}

export default memo(NotificationItem);
