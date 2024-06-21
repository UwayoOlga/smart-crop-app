import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';

const AuthenticationForm = ({ onSubmit, isLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10vh' }}>
      <Typography variant="h5">{isLogin ? 'Log In' : 'Sign Up'}</Typography>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: 10 }}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: 10 }}
      />
      <Button type="submit" variant="contained" color="primary" style={{ margin: 10 }}>{isLogin ? 'Log In' : 'Sign Up'}</Button>
    </form>
  );
};

export default AuthenticationForm;
