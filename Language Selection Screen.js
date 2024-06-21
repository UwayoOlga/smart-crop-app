import React from 'react';
import { Typography, Button } from '@material-ui/core';

const LanguageSelection = ({ onSelectLanguage }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20vh' }}>
      <Typography variant="h5" style={{ marginBottom: 20 }}>Select your language:</Typography>
      <Button variant="contained" color="primary" onClick={() => onSelectLanguage('en')}>English</Button>
      <Button variant="contained" color="primary" onClick={() => onSelectLanguage('rw')}>Ikinyarwanda</Button>
      <Button variant="contained" color="primary" onClick={() => onSelectLanguage('fr')}>Français</Button>
    </div>
  );
};

export default LanguageSelection;
