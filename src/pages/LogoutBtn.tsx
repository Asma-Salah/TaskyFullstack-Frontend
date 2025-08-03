import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      const response = await axiosInstance.post("/api/auth/logout");
      response.data;
    },
    onSuccess: () => {
      navigate("/login");
    },
  });
  return (
    <Button
      variant="outlined"
      color="error"
      loading={isPending}
      onClick={() => mutate()}
    >
      Logout
    </Button>
  );
}

export default LogoutBtn;
