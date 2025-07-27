import { Box, Typography, Stack } from "@mui/material";

function LandingPage() {
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://www.pixelstalk.net/wp-content/uploads/2016/07/Magnificent-Plain-Wallpaper.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Stack textAlign={"center"}>
        <Typography
          variant="h1"
          textTransform={"capitalize"}
          fontFamily={"lato sans-serif"}
        >
          Tasky Platform
        </Typography>
        <Typography
          variant="h5"
          fontFamily={"lobster sans-serif"}
          fontStyle={"italic"}
          fontWeight={700}
        >
          Track your time with tasky, the only platform worthy of your time!!{" "}
          <br />
          write it down today and execute with priority. <br />
          AND always keep your mind clean for future unfiltered thoughts
        </Typography>
      </Stack>
    </Box>
  );
}
export default LandingPage;
