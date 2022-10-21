import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

let btnStyle = {
    padding:'10px 50px',
    margin:'15px'
}

function Home() {
    let navigate = useNavigate()

  return (
    <div>
      <Box className="parentMain">
        <Box className="parent">
            <img width='200px' height='200px' src="https://apk4all.io/wp-content/uploads/apps/TickTick-ToDo-List-Planner-Reminder-Calendar/YSlqf3WBgIuNjwOoABhCM6ehJFJ0p5aTe5TAc3gq80SMBdg-8mqwcOUwFgFu4uVU2gQ-4.png" alt="" />
        </Box>

        <Box>
            <h1>TodoApp</h1>
        </Box>

        <Box className="parent">
            <Button onClick={()=>{
                navigate('signin')
            }} endIcon={<ExitToAppIcon/>} sx={btnStyle} variant="contained">SIGN IN</Button>
            <Button onClick={()=>{
                navigate('signup')
            }} endIcon={<AppRegistrationIcon/>} sx={btnStyle} variant="contained" color="success">SIGN UP</Button>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
