import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar";
import Home from "./pages/homePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import NewTask from "./pages/NewTask";
import Trash from "./pages/Trash";
import Profile from "./pages/Profile";
import Footer from "./components/footer";
import Protected from "./components/protected";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/tasks"
          element={
            <Protected>
              <AllTasks />
            </Protected>
          }
        />
        <Route
          path="/tasks/new"
          element={
            <Protected>
              <NewTask />
            </Protected>
          }
        />
        <Route
          path="/tasks/complete"
          element={
            <Protected>
              <CompletedTasks />
            </Protected>
          }
        />

        <Route
          path="/tasks/trash"
          element={
            <Protected>
              <Trash />
            </Protected>
          }
        />
        <Route
          path="/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
