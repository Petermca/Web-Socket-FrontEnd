import React from 'react';

export const NotificationList = ({ notifications }) => (
  <div>
    <h2>Notifications</h2>
    <ul>
      {notifications.map((n, i) => (
        <li key={i}>{n}</li>
      ))}
    </ul>
  </div>
);
