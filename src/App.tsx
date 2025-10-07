import { Outlet } from "react-router-dom";
import Header from "./components/Navbar/ui/Header";

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
