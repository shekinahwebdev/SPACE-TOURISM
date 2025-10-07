import logo from "/assets/shared/logo.svg";
import open from "/assets/shared/icon-hamburger.svg";
import MobileNavBar from "../MobileNavBar";
import DesktopNavBar from "../DesktopNavBar";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="flex flex-row justify-between items-center w-full xl:mt-7">
        <img src={logo} alt="Logo" className="" />
        <button className="" onClick={() => setIsOpen((prev) => !prev)}>
          <img src={open} alt="Hamburger-icon" />
        </button>
      </header>
      {isOpen && <MobileNavBar onClosed={() => setIsOpen(false)} />}
      <DesktopNavBar />
    </>
  );
};

export default Header;
