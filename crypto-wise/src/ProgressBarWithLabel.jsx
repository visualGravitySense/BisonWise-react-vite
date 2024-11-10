import React from 'react';
import { ProgressBar, Label } from '@blueprintjs/core';
import './App.css'

const ProgressBarWithLabel = ({ label, value, maxValue }) => {
  const progress = (value / maxValue) * 100;

  return (
    <div style={{ marginBottom: '20px' }}>
      <Label>{label}</Label>
      <ProgressBar 
        value={progress / 100} 
        animate={true} 
        striped={true} 
        intent="success" 
      />
      <div style={{ textAlign: 'right', marginTop: '5px' }}>
        {value} / {maxValue} пунктов
      </div>
    </div>
  );
};

export default ProgressBarWithLabel;
