import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import axiosInstance from "../api/axios";
import useUser from "../store/userStore";

interface loginDetails {
  emailOrUsername: string;
  password: string;
}

function Login() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const { isPending, mutate } = useMutation({
    mutationKey: ["login-user"],
    mutationFn: async (newLoginDetails: loginDetails) => {
      const response = await axiosInstance.post(
        "/api/auth/login",
        newLoginDetails
      );

      return response.data;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        setFormError(error.response?.data.message);
      } else {
        setFormError("Something went wrong");
      }
    },
    onSuccess: (data) => {
      setUser(data);
      navigate("/tasks");
    },
  });

  function handleLogin() {
    const newLoginDetails = { emailOrUsername, password };
    mutate(newLoginDetails);
  }

  return (
    <Box textAlign={"center"}>
      <Typography variant="h6">Have an Account? login here</Typography>
      <Grid container justifyContent={"center"}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper>
            <Stack spacing={2} padding={4} mb={2}>
              {formError && <Alert severity="error">{formError}</Alert>}
              <TextField
                label="Email or Username"
                type="text"
                fullWidth
                required
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
              />
              <TextField
                label="password"
                type="password"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="contained"
                onClick={handleLogin}
                loading={isPending}
              >
                login
              </Button>
              <Typography>
                Don't have an account? <Link to="/register">sign up</Link>
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Login;
