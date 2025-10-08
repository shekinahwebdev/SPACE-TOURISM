import logo from "/assets/shared/logo.svg";
import open from "/assets/shared/icon-hamburger.svg";
import MobileNavBar from "../MobileNavBar";
import DesktopNavBar from "../DesktopNavBar";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState(location.pathname);

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <header className="flex flex-row justify-between items-center w-full xl:mt-7">
        <Link to="/">
          <img src={logo} alt="Logo" className="" />
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img src={open} alt="Hamburger-icon" />
        </button>
      </header>
      {isOpen && (
        <MobileNavBar
          onClosed={() => setIsOpen(false)}
          activePage={activePage}
        />
      )}
      <DesktopNavBar activePage={activePage} />
    </>
  );
};

export default Header;
