import { Button } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
interface Profile {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}
interface Props {
  profile: Profile;
}

function ProfileUpdate({ profile }: Props) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["update-Profile"],
    mutationFn: async (profile: Profile) => {
      const response = await axiosInstance.patch("api/tasks/user", profile);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
    },
  });

  return (
    <Button
      variant="contained"
      onClick={() => {
        mutate(profile);
      }}
      loading={isPending}
    >
      Update profile
    </Button>
  );
}

export default ProfileUpdate;
