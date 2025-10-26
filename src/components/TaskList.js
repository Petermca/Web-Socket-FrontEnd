import React from 'react';

export const TaskList = ({ tasks }) => (
  <div>
    <h2>Task List</h2>
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <strong>{task.title}</strong> - {task.description}
        </li>
      ))}
    </ul>
  </div>
);
