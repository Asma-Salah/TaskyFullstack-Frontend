import { Button } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaTrashRestore } from "react-icons/fa";
import axiosInstance from "../api/axios";

export const RestoreTask = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationKey: ["restore-task"],
    mutationFn: async (id: string) => {
      await axiosInstance.patch(`/api/tasks/trash/restore/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-tasks"],
      });
      queryClient.invalidateQueries({
        queryKey: ["get-trash"],
      });
    },
  });
  return (
    <Button
      size="small"
      variant="outlined"
      color="primary"
      startIcon={<FaTrashRestore />}
      loading={isPending}
      onClick={() => {
        mutate(id);
      }}
    >
      Restore
    </Button>
  );
};
