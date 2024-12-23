import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/authService";
import { useDispatch } from "react-redux";

import { Header, Container } from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in by calling getCurrentUser
    authService
      .getCurrentUser()
      .then((data) => {
        if (data) {
          console.log("User logged in:", data);
          dispatch(login(data)); // If user is logged in, dispatch login action
        } else {
          console.log("No session found, please log in.");
          dispatch(logout()); // If no session, user needs to log in
          navigate("/login");
        }
      })
      .finally(() => setLoading(false)); // Set loading state after checking session
  }, []);

  return !loading ? (
    <>
      <Container>
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">
          <Outlet />
        </main>
      </Container>
    </>
  ) : null;
};

export default App;
