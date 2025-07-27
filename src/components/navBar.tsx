import { Toolbar, AppBar, Button, Typography, Paper, Box } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Box>
      <Paper>
        <AppBar
          position="static"
          color="transparent"
          elevation={1}
          sx={{ mt: 1, mb: 4 }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, color: "#1979d2", fontWeight: 700 }}
            >
              Tasky
            </Typography>
            <Button component={Link} to="/login" variant="text" sx={{ mr: 2 }}>
              LogIn
            </Button>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              sx={{ mr: 2 }}
            >
              Sign Up
            </Button>
          </Toolbar>
        </AppBar>
      </Paper>
    </Box>
  );
}
export default NavBar;
