import {
  Box,
  Toolbar,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

interface UpdateDetails {
  title: string;
  description: string;
}

// useState("");

const UpdateTask = () => {
  const [title, setNewTitle] = useState("");
  const [description, setNewDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const { id } = useParams();

  const { isPending, mutate } = useMutation({
    mutationKey: ["update-task"],
    mutationFn: async (newDetails: UpdateDetails) => {
      const response = await axiosInstance.patch(
        `/api/tasks/${id}`,
        newDetails
      );
      return response.data;
    },
    onError: () => {
      toast("Error Updating task", {
        style: { backgroundColor: "red", color: "white" },
      });
    },
    onSuccess: () => {
      toast("Task Created successfully", {
        style: { backgroundColor: "gray", color: "white" },
      });
    },
  });

  const { isLoading, isError, data, isSuccess } = useQuery({
    queryKey: ["get-task-for-update"],
    queryFn: async () => {
      const response = await axiosInstance.get(`/api/tasks/${id}`);
      console.log("i am response query", response.data);
      return response.data;
    },
  });

  useEffect(() => {
    if (isSuccess) {
      setNewTitle(data.title);
      setNewDescription(data.description);
      setIsCompleted(data.isCompleted);
    }
  }, [data]);

  const queryClient = useQueryClient();
  const { mutate: mutateAsComplete, isPending: markAsCompletePending } =
    useMutation({
      mutationKey: ["mark-AS-Complete"],
      mutationFn: async ({
        id,
        isCompleted,
      }: {
        id: string;
        isCompleted: boolean;
      }) => {
        const response = await axiosInstance.patch(
          `/api/tasks/markComplete/${id}`,
          { isCompleted }
        );
        return response.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["get-task-for-update"] });
      },
    });

  if (isLoading) {
    return <Loader message="Loading please wait..." />;
  }

  if (isError) {
    return (
      <Stack component={"section"} p={5}>
        <Typography variant="h4" textAlign={"center"} fontWeight={"bold"}>
          Something went wrong!
        </Typography>
      </Stack>
    );
  }

  function handleUpdateTask() {
    const updateDetails = { title, description };
    mutate(updateDetails);
  }

  return (
    <Box component="section" minHeight={"85vh"}>
      <Toolbar />
      <Typography
        variant="h4"
        textAlign={"center"}
        color="primary"
        mt={1}
        fontStyle={"italic"}
      >
        Update
      </Typography>
      <Grid container mt={5} justifyContent={"center"}>
        <Grid size={{ xs: 12, md: 6, lg: 5 }}>
          <Stack component={"form"} spacing={2}>
            <TextField
              variant="filled"
              fullWidth
              label="New title"
              required
              type="text"
              value={title}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <TextField
              variant="filled"
              fullWidth
              required
              label="New description"
              multiline
              minRows={8}
              color="secondary"
              value={description}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <Stack component={"div"} direction={"row"} spacing={2}>
              <Button
                variant="contained"
                sx={{ flexGrow: 1 }}
                loading={markAsCompletePending}
                onClick={() => {
                  if (id) {
                    mutateAsComplete({ id, isCompleted: !isCompleted });
                  }
                }}
              >
                {isCompleted ? "mark As Incomplete " : "mark as completed"}
              </Button>
              <Button
                variant="contained"
                sx={{ flexGrow: 1 }}
                loading={isPending}
                onClick={handleUpdateTask}
              >
                Update Your Task
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UpdateTask;
