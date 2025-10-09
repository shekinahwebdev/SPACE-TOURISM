import logo from "/assets/shared/logo.svg";
import open from "/assets/shared/icon-hamburger.svg";
import MobileNavBar from "../MobileNavBar";
import DesktopNavBar from "../DesktopNavBar";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      {isOpen && <MobileNavBar onClosed={() => setIsOpen(false)} />}
      <DesktopNavBar />
    </>
  );
};

export default Header;
