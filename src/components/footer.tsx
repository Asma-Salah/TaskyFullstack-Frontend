import { Box, IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box
      component={"div"}
      sx={{
        bgcolor: "#2f2f2f",
        color: "white",
        py: 4,
        mt: 2,
      }}
    >
      <Typography
        variant="body1"
        align="center"
        sx={{ mb: 2, px: 2, maxWidth: "600px", mx: "auto" }}
      >
        Tasky your smart task management tool
      </Typography>
      <Stack
        direction={"row"}
        spacing={4}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <IconButton
          sx={{
            bgcolor: "#f90000",
            borderRadius: "2rem",
            p: ".3rem",
            color: "white",
          }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          sx={{
            bgcolor: "#f90000",
            borderRadius: "2rem",
            p: ".3rem",
            color: "white",
          }}
        >
          <XIcon />
        </IconButton>
        <IconButton
          sx={{
            bgcolor: "#f90000",
            borderRadius: "2rem",
            p: ".3rem",
            color: "white",
          }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          sx={{
            bgcolor: "#f90000",
            borderRadius: "2rem",
            p: ".3rem",
            color: "white",
          }}
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
      <Typography
        variant="caption"
        align="center"
        display={"block"}
        sx={{ mt: 3, opacity: 0.7 }}
      >
        @copy Tasky project.All Rights Reserved
      </Typography>
    </Box>
  );
}
export default Footer;
