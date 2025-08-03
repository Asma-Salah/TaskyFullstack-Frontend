import {
  Typography,
  CardContent,
  Card,
  CardActions,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

import axiosInstance from "../api/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { RestoreTask } from "./RestoreTask";
import { grey } from "@mui/material/colors";

type CardProps = {
  id: string;
  title: string;
  description: string;
  isComplete: boolean;
  isDeleted: boolean;
};

function Task({ id, title, description, isComplete, isDeleted }: CardProps) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationKey: ["delete-task"],
    mutationFn: async () => {
      const response = await axiosInstance.delete(`/api/tasks/${id}`);

      return response.data;
    },
    onSuccess: () => {
      toast("Task moved to trash", {
        style: { backgroundColor: "darkgray", color: "white" },
      });
      queryClient.invalidateQueries({ queryKey: ["get-tasks"] });
    },
    onError: () => {
      toast("Something went wrong!", {
        style: { backgroundColor: "darkgray", color: "red" },
      });
    },
  });
  function handleDelete() {
    mutate();
  }

  function handleUpdate() {
    navigate(`/tasks/update/${id}`);
  }

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
      <Card
        elevation={7}
        sx={{
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          bgcolor: grey[400],
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            gutterBottom
            sx={{ textDecoration: isComplete ? "line-through" : "none" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            gutterBottom
            sx={{ textDecoration: isComplete ? "line-through" : "none" }}
          >
            {description}
          </Typography>
          <Divider sx={{ my: 2 }} />
        </CardContent>
        {isDeleted ? (
          <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
            <RestoreTask id={id} />
          </CardActions>
        ) : (
          <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              startIcon={<FaEdit />}
              onClick={handleUpdate}
            >
              Update
            </Button>
            <Button
              size="small"
              variant="contained"
              color="error"
              startIcon={<FaTrashAlt />}
              onClick={handleDelete}
              loading={isPending}
            >
              Delete
            </Button>
          </CardActions>
        )}
      </Card>
    </Grid>
  );
}
export default Task;
