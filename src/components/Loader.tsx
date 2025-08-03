import { Stack, Typography, CircularProgress } from "@mui/material";

function Loader({ message }: { message: string }) {
  return (
    <Stack p={5} justifyContent={"center"} alignItems={"center"}>
      <CircularProgress size={50} thickness={5} />
      <Typography variant="h6">{message}</Typography>
    </Stack>
  );
}
export default Loader;
