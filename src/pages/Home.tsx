import Header from "../components/Navbar/ui/Header";
import { useResponsiveBackground } from "../hooks/useResponsiveBackground";

export const Home = () => {
  const bgImage = useResponsiveBackground({
    mobile: "/assets/home/background-home-mobile.jpg",
    tablet: "/assets/home/background-home-tablet.jpg",
    desktop: "/assets/home/background-home-desktop.jpg",
  });

  return (
    <section
      className="p-6 h-screen bg-cover bg-center flex flex-col w-full"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />
    </section>
  );
};
