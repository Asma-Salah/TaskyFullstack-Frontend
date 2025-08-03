import {
  Box,
  TextField,
  Toolbar,
  Stack,
  Grid,
  Paper,
  Typography,
  Alert,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import Loader from "../components/Loader";
import ProfileUpdate from "./profileUpdate";
import ChangePassword from "./ChangePassword";
import UploadImg from "./uploadImg";
import LogoutBtn from "./LogoutBtn";

interface Profile {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}
function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [formError] = useState("");

  const { isError, isLoading, data, isSuccess } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await axiosInstance.get("/api/tasks/user");
      console.log(response.data.user);
      return response.data.user as Profile;
    },
  });
  useEffect(() => {
    if (data && isSuccess) {
      console.log(data);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setUsername(data.username);
      setEmail(data.email);
    }
  }, [data]);
  if (isError) {
    return (
      <Stack component={"section"} p={5}>
        <Typography variant="h4" textAlign={"center"} fontWeight={"bold"}>
          Something went wrong!
        </Typography>
      </Stack>
    );
  }

  if (isLoading) {
    <Loader message="Loading tasks please wait...." />;
  }

  return (
    <Box component={"section"} minHeight={"80vh"} textAlign={"center"}>
      <Toolbar />
      <Typography variant="h4">Profile Info</Typography>
      <Grid container justifyContent={"center"} spacing={2}>
        <Grid size={{ xs: 12, md: 3 }}>
          <UploadImg />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Paper>
            <Stack spacing={2} mt={2} p={2}>
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
                label="lastName"
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
                type="text"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <ProfileUpdate
                profile={{ firstName, lastName, username, email }}
              />
            </Stack>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Paper elevation={6}>
            <Typography variant="h6" my={2}>
              Change Password
            </Typography>
            <Stack spacing={2} p={2}>
              <TextField
                label="Current Password"
                type="password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <TextField
                label="New Password"
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <ChangePassword
                newPassword={newPassword}
                currentPassword={currentPassword}
              />
            </Stack>
            <Stack mt={2} p={2}>
              <LogoutBtn />
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Profile;
