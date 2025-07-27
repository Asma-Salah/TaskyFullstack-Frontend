import { Box, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
  return (
    <Box
      component={"div"}
      sx={{ bgcolor: "2f2f2f", py: 4, textAlign: "center" }}
    >
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        <FacebookIcon
          sx={{ bgcolor: "#f90000", borderRadius: "2rem", p: ".3rem" }}
        />
        <XIcon sx={{ bgcolor: "#f90000", borderRadius: "2rem", p: ".3rem" }} />
        <InstagramIcon
          sx={{ bgcolor: "#f90000", borderRadius: "2rem", p: ".3rem" }}
        />
        <LinkedInIcon
          sx={{ bgcolor: "#f90000", borderRadius: "2rem", p: ".3rem" }}
        />
      </Stack>
    </Box>
  );
}
export default Footer;
