import React from 'react';
import "./QueueCard.css";
import SetTimeOutExample from '../SetTimeOutExample/SetTimeOutExample';

const QueueCard = ({ name, tasks, onTaskComplete }) => {
  return (
    <div className='queue-cards'>
      <h3>{name}</h3>
      <div className='task-details'>
        <p>Queue List:</p>
        <div className='task-container'>
          {tasks.map((task) => (
            <div key={task.id} className={`task ${task.priority}`}>
              {task.content}
            </div>
          ))}
        </div>
        <p>Duration:</p>
        <div className='duration-container'>
          {tasks.map((task) => (
            <div key={task.id} className="task-duration">
              <SetTimeOutExample
                initialWidth={0}
                duration={task.duration}
                onComplete={() => onTaskComplete(task.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QueueCard;
