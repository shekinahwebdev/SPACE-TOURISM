import { Outlet } from "react-router-dom";
import Header from "./components/Navbar/layout/Header";
import { usePageBackground } from "./hooks/usePageBackground";
const App = () => {
  const bgImage = usePageBackground();
  return (
    <section
      className="p-6 min-h-screen bg-cover bg-no-repeat bg-center flex flex-col w-full"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default App;
