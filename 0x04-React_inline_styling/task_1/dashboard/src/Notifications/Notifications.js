import React, { Component } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotifCSS = StyleSheet.create({
  notifWrapper: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '20px',
    '@media (min-width: 900px)': {
      float: 'right',
      marginRight: '50px',
    }
  },
  Notifications: {
    border: '1px red dashed',
    padding: '10px 100px 10px 10px',
    margin: '0',
  },
  menuItem: {
    '@media (max-width: 900px)': {
      height: '100%',
    },
  }
})


class Notifications extends Component {
  constructor() {
    super();
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    const {listNotifications} = this.props;
    if (nextProps.listNotifications.length > listNotifications.length) {
      return true;
    }
    return false;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <div className={css(NotifCSS.notifWrapper)}>
        <div className={css(NotifCSS.menuItem)}>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(NotifCSS.Notifications)}>
            {listNotifications.length > 0 ? (<p>Here is the list of notifications</p>) : (<p>No new notification for now</p>)}
            {listNotifications ? (listNotifications.map((notification) => (
                <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} markAsRead={() => this.markAsRead(notification.id)} />
              ))) : (<tr>No course available yet</tr>
            )}
            <button style={{ border: 0, background: 'white', position: 'absolute', right: 75, top: 125 }} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
              <img src={closeIcon} height="15px" width="15" alt="close icon" />
            </button>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
