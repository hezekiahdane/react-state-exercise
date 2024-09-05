import React from 'react';
import "./Task.css";

const Task = ({ content, priority }) => {
  // Determine the class name based on the task's priority
  const taskClassName = priority === 'high' ? 'task high-priority' : 'task';

  return (
    <div className={taskClassName}>
      {content}
    </div>
  );
};

export default Task;
