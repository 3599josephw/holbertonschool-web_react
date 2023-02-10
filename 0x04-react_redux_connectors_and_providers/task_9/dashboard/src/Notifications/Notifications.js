import React, { PureComponent } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fetchNotifications } from '../actions/notificationActionCreators'


const opacity = {
  '0%': {opacity: 0},
  '100%': {opacity: 1},
};

const bounce = {
  '0%': {transform: 'translateY(0px)'},
  '50%': {transform: 'translateY(-5px)'},
  '100%': {transform: 'translateY(5px)'},
};

const NotifCSS = StyleSheet.create({
  notifWrapper: {
    '@media (min-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      float: 'right',
      marginRight: '50px',
    },
  },
  Notifications: {
    '@media (min-width: 900px)': {
      border: '1px red dashed',
    },
    padding: '10px 100px 10px 10px',
    margin: '0',
    '@media (max-width: 900px)': {
      marginBottom: '100px',
    },
  },
  menuItem: {
    ':hover': {
      pointer: 'cursor',
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
      animationName: [opacity, bounce],
    },
  },
  animate: {
    animationDuration: '0.5s, 1s',
    animationIterationCount: '3',
    animationName: [opacity, bounce],
  },
})


class Notifications extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetchNotifications();
  }

  render() {
    return (
      <div className={css(NotifCSS.notifWrapper)}>
        <div className={css(NotifCSS.menuItem, NotifCSS.animate)}>
          <p onClick={this.props.handleDisplayDrawer}>Your notifications</p>
        </div>
        {this.props.displayDrawer && (
          <div className={css(NotifCSS.Notifications)}>
            {this.props.listNotifications.length > 0 ? (<p>Here is the list of notifications</p>) :
              (<p>No new notification for now</p>)}
            {this.props.listNotifications ? (
              this.props.listNotifications.map((notification) => (
                <NotificationItem key={notification.id} type={notification.type}
                  value={notification.value} html={notification.html} markNotificationAsRead={this.props.markNotificationAsRead} />
              ))) : (<tr>No course available yet</tr>
            )}
            <button onClick={this.props.handleHideDrawer} style={{ border: 0, background: 'white', position: 'absolute', right: 75, top: 125 }} aria-label="Close">
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
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
  handleDisplayDrawer: () => console.log('Display'),
  handleHideDrawer: () => console.log('Hide'),
  markNotificationAsRead: (id) => console.log(`Notification ${id} read`),};

export default Notifications;
