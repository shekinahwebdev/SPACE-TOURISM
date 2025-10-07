import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";

const RootLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default RootLayout;
