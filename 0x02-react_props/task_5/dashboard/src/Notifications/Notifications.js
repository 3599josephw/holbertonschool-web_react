import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';


Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

function Notifications({displayDrawer, listNotifications}) {
  return (
    <div className='notif-wrapper'>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          {listNotifications.length > 0 ? (<p>Here is the list of notifications</p>) : (<p>No new notification for now</p>)}
          {listNotifications ? (listNotifications.map((notification) => (
              <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />
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

export default Notifications;
