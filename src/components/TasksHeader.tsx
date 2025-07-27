import { Button, Typography, Stack, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import useUserStore from "../store/userStore";

const navLinks = [
  { label: "Tasks", path: "/tasks" },
  { label: "New Task", path: "/tasks/new" },
  { label: "Completed Tasks", path: "/tasks/complete" },
  { label: "Trash", path: "/tasks/trash" },
  { label: "Profile", path: "/profile" },
];

function Nav() {
  const { user } = useUserStore();
  if (user) {
    return (
      <Stack>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            style={{ textDecoration: "none" }}
          >
            <Typography variant="body1" fontWeight={600} color="#333">
              {link.label}
            </Typography>
          </Link>
        ))}
        <Typography variant="body1" fontWeight={600} color="#333">
          Hey welcome!
        </Typography>
        <Avatar sx={{ bgcolor: "crimson" }}>
          {user.firstName[0].toUpperCase()}
          {user.lastName[0].toUpperCase()}
        </Avatar>
      </Stack>
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
