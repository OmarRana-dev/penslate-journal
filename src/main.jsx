import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./store/store.js";

import "./index.css";
import App from "./App.jsx";
import {
  Blogfeed,
  Blog,
  Login,
  Signup,
  ErrorPage,
  AddBlog,
  EditBlog,
} from "./pages";
import AuthLayout from "./components/AuthLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="" element={<Blogfeed />} />, ,
      <Route
        path="/login"
        element={
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        }
      />
      ,
      <Route
        path="/signup"
        element={
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        }
      />
      ,
      <Route
        path="/editor/new-story"
        element={
          <AuthLayout authentication>
            {" "}
            <AddBlog />
          </AuthLayout>
        }
      />
      , ,
      <Route
        path="/editor/:blogId"
        element={
          <AuthLayout authentication>
            {" "}
            <EditBlog />
          </AuthLayout>
        }
      />
      ,
      <Route
        path="/blog/:slug"
        element={
          <AuthLayout authentication>
            <Blog />
          </AuthLayout>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
