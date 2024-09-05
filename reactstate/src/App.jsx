import { useState } from 'react';
import './App.css';
import TaskQueue from './TaskQueue/TaskQueue';
import AddRandomTask from './Buttons/AddRandomTask';
import AdmitTask from './Buttons/AdmitTask';
import QueueCard from './QueueCard/QueueCard';
import { Grid2 } from '@mui/material';
import Task from './Task/Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [highPriorityQueue, setHighPriorityQueue] = useState([]);
  const [regularQueue2, setRegularQueue2] = useState([]);
  const [regularQueue3, setRegularQueue3] = useState([]);
  const [regularQueue4, setRegularQueue4] = useState([]);

  const addRandomTask = () => {
    const randomNumber = Math.floor(Math.random() * 250); 
    const isHighPriority = Math.random() > 0.5;
    const newTask = {
      id: Date.now(),
      content: `${randomNumber}`,
      priority: isHighPriority ? 'high' : 'normal',
      duration: 3000 // Duration in milliseconds
    };
    setTasks([...tasks, newTask]);
  };

  const admitTask = () => {
    if (tasks.length === 0) return;

    const taskToAdmit = tasks[0];
    setTasks(tasks.slice(1));

    if (taskToAdmit.priority === 'high') {
      setHighPriorityQueue([...highPriorityQueue, taskToAdmit]);
    } else {
      if (regularQueue2.length <= regularQueue3.length && regularQueue2.length <= regularQueue4.length) {
        setRegularQueue2([...regularQueue2, taskToAdmit]);
      } else if (regularQueue3.length <= regularQueue4.length) {
        setRegularQueue3([...regularQueue3, taskToAdmit]);
      } else {
        setRegularQueue4([...regularQueue4, taskToAdmit]);
      }
    }
  };

  const handleTaskComplete = (taskId) => {
    setHighPriorityQueue((prevQueue) => prevQueue.filter((task) => task.id !== taskId));
    setRegularQueue2((prevQueue) => prevQueue.filter((task) => task.id !== taskId));
    setRegularQueue3((prevQueue) => prevQueue.filter((task) => task.id !== taskId));
    setRegularQueue4((prevQueue) => prevQueue.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <Grid2 container rowSpacing={1} columnSpacing={1}>
        <Grid2 size={8}>
          <div className='task-queue-area'>
            <AddRandomTask onAddTask={addRandomTask} />
            <TaskQueue />
            <div className='task-container'>
              {tasks.map((task) => (
                <Task key={task.id} content={task.content} priority={task.priority} />
              ))}
            </div>
            <AdmitTask onAdmitTask={admitTask} />
          </div>
        </Grid2>

        <Grid2 size={4}>
          <QueueCard
            name="High Priority Queue 1"
            tasks={highPriorityQueue}
            onTaskComplete={handleTaskComplete}
          />
          <QueueCard
            name="Regular Queue 2"
            tasks={regularQueue2}
            onTaskComplete={handleTaskComplete}
          />
          <QueueCard
            name="Regular Queue 3"
            tasks={regularQueue3}
            onTaskComplete={handleTaskComplete}
          />
          <QueueCard
            name="Regular Queue 4"
            tasks={regularQueue4}
            onTaskComplete={handleTaskComplete}
          />
        </Grid2>
      </Grid2>
    </>
  );
}

export default App;
