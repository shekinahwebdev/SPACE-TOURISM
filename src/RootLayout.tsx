import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

const RootLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/destination",
        element: <Navigate to="/destination/moon" replace />,
      },
      { path: "/destination/:planet", element: <Destination /> },
      { path: "/crew", element: <Crew /> },
      { path: "/technology", element: <Technology /> },
    ],
  },
]);

export default RootLayout;
