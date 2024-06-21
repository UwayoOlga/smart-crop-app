import React from 'react';
import { Typography, CircularProgress } from '@material-ui/core';

const LoadingScreen = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20vh' }}>
      <img src="/logo.png" alt="Smart Crop Connection Logo" style={{ width: 100, height: 100 }} />
      <Typography variant="h5" style={{ margin: 20 }}>Empowering Rwandan Agriculture</Typography>
      <CircularProgress />
    </div>
  );
};

export default LoadingScreen;
