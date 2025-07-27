import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Grid,
  Stack,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import axiosInstance from "../api/axios";

interface user {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationKey: ["register-user"],
    mutationFn: async (newUser: user) => {
      const response = await axiosInstance.post("/api/auth/register", newUser);
      console.log(response);
      return response.data;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        setFormError(error.response?.data.message);
      } else {
        setFormError("Something went wrong");
      }
    },

    onSuccess: () => {
      navigate("/login");
    },
  });

  function handleSignUp() {
    setFormError("");
    if (password !== confirmPassword) {
      setFormError("password and confirm password must match");
      return;
    }
    const newUser = { firstName, lastName, username, email, password };

    mutate(newUser);
  }
  return (
    <Box>
      <Typography
        variant="h4"
        textTransform={"uppercase"}
        textAlign={"center"}
        fontStyle={"italic"}
        fontFamily={"lobster sans-serif"}
        fontWeight={"900"}
      >
        set out a new journey with us!! <br />
        transform with tasky
      </Typography>
      <Grid container justifyContent={"center"}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper component={"form"} sx={{ p: 2 }} elevation={24}>
            <Stack spacing={2} p={4} bgcolor={"lightpink"} borderRadius={6}>
              {formError && <Alert severity="error">{formError}</Alert>}
              <TextField
                label="FirstName"
                type="text"
                fullWidth
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                label="LastName"
                type="text"
                fullWidth
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                label="username"
                type="text"
                fullWidth
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="email"
                type="email"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="password"
                type="password"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                label="confirm password"
                type="password"
                fullWidth
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button
                variant="contained"
                onClick={handleSignUp}
                loading={isPending}
              >
                Sign Up
              </Button>
              <Typography>
                Already have an account? <Link to="/login">Login</Link>
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Register;
