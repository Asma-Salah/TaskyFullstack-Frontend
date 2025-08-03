import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/axios";

interface Props {
  newPassword: string;
  currentPassword: string;
}

function ChangePassword({ newPassword, currentPassword }: Props) {
  const { isPending, mutate, isSuccess } = useMutation({
    mutationKey: ["change-password"],
    mutationFn: async (newPassword: Props) => {
      const response = await axiosInstance.patch(
        "/api/auth/password",
        newPassword
      );
      return response.data;
    },
  });

  return (
    <Button
      variant="contained"
      color={isSuccess ? "success" : "warning"}
      loading={isPending}
      onClick={() => {
        mutate({ newPassword, currentPassword });
      }}
    >
      Update
    </Button>
  );
}

export default ChangePassword;
