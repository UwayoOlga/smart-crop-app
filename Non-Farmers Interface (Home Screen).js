import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CropCard from './CropCard'; // Assuming CropCard component exists

const HomeScreen = ({ crops }) => {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5" style={{ marginBottom: 20 }}>Latest Updates</Typography>
      <Grid container spacing={3}>
        {crops.map(crop => (
          <Grid item xs={12} sm={6} md={4} key={crop.id}>
            <CropCard crop={crop} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomeScreen;
