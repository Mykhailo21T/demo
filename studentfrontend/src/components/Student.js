import React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Student() {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const [age,setAge]=useState('')
  const[students,setStudents]=useState([])
  const handleClick = (e)=>{
    e.preventDefault()
    const student = {name,email,age}
    console.log();
  }

  useEffect(()=>{
    fetch('http://localhost:8080/api/students')
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    }
    )
  },[])
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="name" variant="outlined" 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="email" variant="outlined"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField id="outlined-basic" label="age" variant="outlined"
      value={age}
      onChange={(e)=>setAge(e.target.value)}
      />
      <Button onClick={handleClick}>Create</Button>
     
    </Box>
    
  );
}

