import {
  Box,
  Typography,
  TextField,
  Grid,
  Stack,
  Button,
  Alert,
} from "@mui/material";
import axiosInstance from "../api/axios";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

interface NewTask {
  title: string;
  description: string;
}

function NewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formError, setFormError] = useState("");

  const { isPending, mutate } = useMutation({
    mutationKey: ["create-task"],
    mutationFn: async (NewTask: NewTask) => {
      const res = await axiosInstance.post("/api/tasks", NewTask);
      console.log(res.data);
      return res.data;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        setFormError(error.response?.data.message);
      } else {
        setFormError("Something went wrong");
      }
    },
    onSuccess: () => {
      toast("Task Created Successfully", {
        style: { backgroundColor: "darkgray", color: "white" },
      });
      setTitle("");
      setDescription("");
    },
  });

  function handleCreate() {
    setFormError("");
    const newTask = { title, description };
    mutate(newTask);
  }

  return (
    <Box component={"section"} minHeight={"90vh"}>
      <Typography variant="h4" textAlign={"center"} fontWeight={"bold"}>
        Create a New Task
      </Typography>
      <Grid container justifyContent={"center"}>
        <Grid size={{ xs: 11, md: 6 }}>
          <Stack>
            {formError && <Alert severity="error">{formError}</Alert>}
            <TextField
              type="text"
              fullWidth
              label="Task Title"
              variant="filled"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              type="text"
              multiline
              minRows={9}
              fullWidth
              label="Task Description"
              variant="filled"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={handleCreate}
              loading={isPending}
              sx={{ mt: 2 }}
            >
              Add
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
export default NewTask;
