import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';


function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button style={{ border: 0, position: 'absolute', right: '30px', top: '30px' }} aria-label='Close' onclick={() => console.log('Close button has been called')}>
        <img src={closeIcon} width="15px" height="15px"></img>
      </button>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  );
}

export default Notifications;
