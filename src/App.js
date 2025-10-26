import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useSocket } from './hooks/useSocket';
import { TopBar } from './components/TopBar';
import { TaskList } from './components/TaskList';

function App() {
  const userId = '1';
  const [tasks, setTasks] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const handleNewTask = useCallback((task) => {
    setTasks((prev) => [...prev, task]);
    setNotifications((prev) => [...prev, task.message]);
  }, []);

  useSocket(userId, handleNewTask);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/tasks/${userId}`)
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  }, [userId]);

  return (
    <div>
      <TopBar notifications={notifications} />
      <div style={{ padding: '20px' }}>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
