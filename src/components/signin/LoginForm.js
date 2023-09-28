import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function LoginForm() {
  return (
    <Box
      component="form"
      sx={{'& > :not(style)': { m: 1  }}}
      noValidate
      autoComplete="off"
    >
      <TextField  label="email" variant="outlined" />
      <TextField  label="password" variant="outlined" />
      {/* <button type='button' className='border border-indigo-600 rounded  p-2' >Login </button>*/}
      <Button variant="contained" className='text-center' color="success">
        Login
      </Button>
    </Box>
  );
}