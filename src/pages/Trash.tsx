import { Box, Grid, Typography, Stack, Toolbar } from "@mui/material";
import Task from "../components/Task";
import axiosInstance from "../api/axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";

interface Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  isDeleted: boolean;
}

function Trash() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-trash"],
    queryFn: async () => {
      const response = await axiosInstance.get("/api/tasks/trash");
      console.log(response.data);
      return response.data;
    },
  });
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
    <Box component={"section"} minHeight={"70vh"}>
      <Toolbar />
      <Grid container justifyContent={"center"} spacing={4} mt={3} px={5}>
        {data &&
          data.map(
            (task: Task) =>
              task.isDeleted == true && (
                <Task
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  isComplete={task.isCompleted}
                  isDeleted={task.isDeleted}
                />
              )
          )}
      </Grid>
    </Box>
  );
}
export default Trash;
