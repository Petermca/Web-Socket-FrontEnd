import React from 'react';
import { NotificationList } from './NotificationList';

export const TopBar = ({ notifications }) => (
  <div style={{ background: '#eee', padding: '10px' }}>
    <h1>Dashboard</h1>
    <NotificationList notifications={notifications} />
  </div>
);
