import { Avatar, Box, Button, Stack } from "@mui/material";
import useUser from "../store/userStore";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/axios";

function UploadImg() {
  const { user, setUser } = useUser();
  const [avatar, setAvatar] = useState<FormData>();
  const { isPending, mutate } = useMutation({
    mutationKey: ["uploadAvatar"],
    mutationFn: async () => {
      const response = await axiosInstance.post("/api/avatar", avatar);
      return response.data;
    },
    onSuccess: (data) => {
      setUser({
        ...user,
        avatar: data.url,
      });
    },
  });
  return (
    <Box
      flexDirection={"column"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Avatar src={user?.avatar} sx={{ width: 100, height: 100 }}>
          {`${user?.firstName[0]} ${user?.lastName[0]} `.toUpperCase()}
        </Avatar>
        <input
          type="file"
          accept="image/"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) {
              const formData = new FormData();
              formData.append("avatar", file);
              setAvatar(formData);
              setUser({
                ...user,
                avatar: URL.createObjectURL(file),
              });
            }
          }}
        />
      </Stack>
      <Button variant="contained" loading={isPending} onClick={() => mutate()}>
        Upload
      </Button>
    </Box>
  );
}

export default UploadImg;
