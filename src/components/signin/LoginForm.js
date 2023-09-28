import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function LoginForm({loginUser,createUser,setLoginData,loginData}) {

  return (
    <Box
      component="form"
      sx={{'& > :not(style)': { m: 1  }}}
      noValidate
      autoComplete="off"
    >
      <TextField  
      label="email" 
      variant="outlined" 
      name='email'
      onChange={e=>{
          setLoginData(pre=>({
           ...pre,
           email:e.target.value
          }))}}
       />
      <TextField  
      label="password" 
      variant="outlined" 
      name='password'
      onChange={e=>{
        setLoginData(pre=>({
         ...pre,
         password:e.target.value
        }))}}
      />     
      <Button variant="outlined" className='text-center' color="success" onClick={createUser} >CreateUser</Button>
      <Button variant="contained" className='text-center' color="success" onClick={loginUser} >Login</Button>
    </Box>
  );
}