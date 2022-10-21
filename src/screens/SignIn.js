import { Box, Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../config/firebasemethods";
import SignUp from "./SignUp";
// import { Box } from "@mui/system";
import Link from "@mui/material/Link";
import React from "react";
import "../App.css";
import LockOpenIcon from "@mui/icons-material/LockOpen";

let btnStyle = {
  padding: "10px 100px",
  margin: "15px",
};

function SignIn() {
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  let login = () => {
    loginUser({
      email,
      password,
    })
      .then((success) => {
        console.log(success);
        alert(`${success.userName} has been successfully signed in`);
        navigate("/todos", {
          state: success,
        });
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };
  return (
    <div>
      <Box className="parentMain">
        <Box>
          <LockOpenIcon color="secondary" fontSize="large" />
        </Box>
        <Box className="parent">
          <Typography
            sx={{ margin: "0px 0px 20px 0px" }}
            variant="h4"
            textAlign="center"
          >
            Sign In
          </Typography>
        </Box>
        <Box>
          <TextField
            sx={{ width: "100%", margin: "10px 0px", backgroundColor: "white" }}
            variant="standard"
            type="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ width: "100%", margin: "10px 0px", backgroundColor: "white" }}
            variant="standard"
            type="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>

        <Box className="parent">
          <Button sx={btnStyle} onClick={login} variant="contained">
            SIGN IN
          </Button>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="error">
            {error.toString()}
          </Typography>
        </Box>
        <Link
          underline="hover"
          onClick={() => {
            navigate("/signup");
          }}
          variant="body2"
        >
          Don't have an account? Register
        </Link>
      </Box>
    </div>
  );
}

export default SignIn;
