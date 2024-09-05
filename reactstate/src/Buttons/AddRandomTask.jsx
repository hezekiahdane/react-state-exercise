import React from 'react';
import Button from '@mui/material/Button';

const AddRandomTask = ({ onAddTask }) => {
  return (
    <div>
      <Button variant="contained" onClick={onAddTask}>
        Add Random Task
      </Button>
    </div>
  );
};

export default AddRandomTask;
