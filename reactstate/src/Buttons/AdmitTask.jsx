import React from 'react';
import Button from '@mui/material/Button';

const AdmitTask = ({ onAdmitTask }) => {
  return (
    <div>
      <Button 
        variant="contained" 
        onClick={onAdmitTask}
      >
        Admit Task
      </Button>
    </div>
  );
};

export default AdmitTask;
