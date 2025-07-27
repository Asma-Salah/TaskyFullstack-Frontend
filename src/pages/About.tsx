import { Box, Button, Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";
function About() {
  return (
    <Grid container spacing={4} alignItems={"center"} justifyContent={"center"}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{ mt: 4 }}>
          <Stack display={"flex"} justifyContent={"center"} spacing={2}>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              size="large"
            >
              Get Started
            </Button>
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              size="large"
            >
              LogIn
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
export default About;

{
  /* <Box sx={{ mt: 4 }}>
              <Button
                component={RouterLink}
                to="/register"
                variant="contained"
                size="large"
                sx={{ mr: 2 }}
              >
                Get Started
              </Button>
              <Button
                component={RouterLink}
                to="/login"
                variant="outlined"
                size="large"
              >
                LogIn
              </Button>
            </Box> */
}
{
  /* <Grid
          container
          spacing={4}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h3"
              component={"h1"}
              fontWeight={600}
              sx={{ color: "#ffffff", textShadow: "1px 1px 4px #000" }}
            >
              Cleanse your inner thought a precious diamond inside you with
              BlogIt
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#e0e0e0",
                maxWidth: 500,
                mb: 2,
                textShadow: "1px, 1px 3px #000",
              }}
            >
              Create and showcase your blog posts here it will definatly be a
              skim through in the future
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Button
                component={RouterLink}
                to="/register"
                variant="contained"
                size="large"
                sx={{ mr: 2 }}
              >
                Get Started
              </Button>
              <Button
                component={RouterLink}
                to="/login"
                variant="outlined"
                size="large"
              >
                LogIn
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Hero; */
}
