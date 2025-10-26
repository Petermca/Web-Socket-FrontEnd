import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

export const useSocket = (userId, onNewTask) => {
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io('http://localhost:5000');

    socketRef.current.emit('register', userId);

    socketRef.current.on('new-task', (task) => {
      onNewTask(task);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [userId, onNewTask]);

  return socketRef.current;
};
