import { Box, Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUpUser } from "../config/firebasemethods";
import Link from "@mui/material/Link";
import React from "react";
import "../App.css";
import HowToRegIcon from "@mui/icons-material/HowToReg";

let btnStyle = {
  padding: "10px 100px",
  margin: "15px",
};

function SignUp() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let signUp = () => {
    signUpUser({
      email,
      password,
      userName,
      contact,
    })
      .then((success) => {
        console.log(success);
        alert(`${success.userName} has been successfully signed in`);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  return (
    <div>
      <Box className="parentMain">
        <Box>
          <HowToRegIcon color="secondary" fontSize="large" />
        </Box>
        <Box className="parent">
          <Typography
            sx={{ margin: "0px 0px 20px 0px" }}
            variant="h4"
            textAlign="center"
          >
            Register
          </Typography>
        </Box>
        <Box sx={{ padding: "0px 0px 0px 100px" }}>
          <TextField
            sx={{ width: "80%", margin: "10px 0px", backgroundColor: "white" }}
            variant="standard"
            // type="text"
            onChange={(e) => setUserName(e.target.value)}
            label="Username"
          />
          <TextField
            sx={{ width: "80%", margin: "10px 0px", backgroundColor: "white" }}
            variant="standard"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
          />
          <TextField
            sx={{ width: "80%", margin: "10px 0px", backgroundColor: "white" }}
            variant="standard"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
          />
          <TextField
            sx={{ width: "80%", margin: "10px 0px", backgroundColor: "white" }}
            variant="standard"
            type="text"
            onChange={(e) => setContact(e.target.value)}
            label="Contact"
          />
        </Box>

        <Box className="parent">
          <Button sx={btnStyle} onClick={signUp} variant="contained">
            SIGN UP
          </Button>
        </Box>

        <Box>
          <Typography variant="subtitle2" color="error">
            {error.toString()}
          </Typography>
        </Box>
        <Link
          onClick={() => {
            navigate("/signin");
          }}
          underline="hover"
          variant="body2"
        >
          Already have an account? Sign In
        </Link>
      </Box>
    </div>
  );
}

export default SignUp;
