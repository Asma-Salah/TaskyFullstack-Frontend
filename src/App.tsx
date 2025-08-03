import { Routes, Route } from "react-router-dom";

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
import { Toaster } from "react-hot-toast";

import Nav from "./components/taskHEADER";
import NavBar from "./components/navBar";
import UpdateTask from "./pages/UpdateTask";
function App() {
  return (
    <>
      {/* <Nav /> */}
      <Toaster />
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/tasks" element={<Nav />}>
          <Route
            index
            element={
              <Protected>
                <AllTasks />
              </Protected>
            }
          />
          <Route
            path="new"
            element={
              <Protected>
                <NewTask />
              </Protected>
            }
          />
          <Route
            path="complete"
            element={
              <Protected>
                <CompletedTasks />
              </Protected>
            }
          />

          <Route
            path="trash"
            element={
              <Protected>
                <Trash />
              </Protected>
            }
          />

          <Route
            path="profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />

          <Route
            path="update/:id"
            element={
              <Protected>
                <UpdateTask />
              </Protected>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
