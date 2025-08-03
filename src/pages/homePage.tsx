import { Box } from "@mui/material";
import About from "./About";
import LandingPage from "./landingPage";
import NavBar from "../components/navBar";

function Home() {
  return (
    <Box>
      <LandingPage />
      <About />
    </Box>
  );
}
export default Home;
