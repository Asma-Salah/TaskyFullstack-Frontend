import {
  Button,
  Box,
  Typography,
  Stack,
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import useUserStore from "../store/userStore";
import MenuIcon from "@mui/icons-material/Menu";

import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useState } from "react";

const navLinks = [
  { label: "Tasks", path: "/tasks" },
  { label: "New Task", path: "/tasks/new" },
  { label: "Completed Tasks", path: "/tasks/complete" },
  { label: "Trash", path: "/tasks/trash" },
  { label: "Profile", path: "profile" },
];
function Nav() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { user } = useUserStore();
  if (user) {
    return (
      <Box>
        <AppBar>
          <Toolbar>
            <Stack direction="row" alignItems="center" spacing={1} mr={0.5}>
              <MenuBookIcon fontSize="large" sx={{ color: "white" }} />

              <IconButton
                onClick={() => setOpenDrawer(true)}
                sx={{ display: { xs: "block", md: "none" }, color: "white" }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>

            <Stack
              direction="row"
              spacing={3}
              sx={{
                flexGrow: 1,
                justifyContent: "center",
                display: { xs: "none", md: "flex" },
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Typography variant="body1">{link.label}</Typography>
                </Link>
              ))}
            </Stack>

            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="body1">
                Hey welcome! {user.firstName!}
              </Typography>
              <Avatar sx={{ bgcolor: "crimson" }} src={user.avatar}>
                {user.firstName[0].toUpperCase()}
                {user.lastName[0].toUpperCase()}
              </Avatar>
            </Stack>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <Box p={2} width="250px">
            <Stack spacing={2}>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography variant="body1">{link.label}</Typography>
                </Link>
              ))}
            </Stack>
          </Box>
        </Drawer>

        <Outlet />
      </Box>
    );
  } else {
    return (
      <Stack component={"nav"} direction={"row"} spacing={3}>
        <Link to={"/login"}>
          <Button variant="outlined">Login</Button>
        </Link>
        <Link to={"/register"}>
          <Button variant="contained">SignUp</Button>
        </Link>
      </Stack>
    );
  }
}

export default Nav;
