import React from "react";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Aboutus from "./components/Aboutus";
import Ministries from "./components/Ministries";
import Branches from "./components/Branches";
import Contactus from "./components/Contactus";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          index: true, // This specifies that this is the default route
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/aboutus",
          element: <Aboutus />,
        },
        {
          path: "/ministries",
          element: <Ministries />,
        },
        {
          path: "/branches",
          element: <Branches />,
        },
        {
          path: "/contactus",
          element: <Contactus />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/*",
          element: <Error />,
        },
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
