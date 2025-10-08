import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface MobileNavBarProps {
  onClosed: () => void;
  activePage: string;
}

const MobileNavBar = ({ onClosed, activePage }: MobileNavBarProps) => {
  const links = [
    { path: "/", number: "00", label: "Home" },
    { path: "/destination", number: " 01", label: "Destination" },
    { path: "/crew", number: "02", label: "Crew" },
    { path: "/technology", number: "03", label: "Technology" },
  ];

  const navRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power1.inOut",
        duration: 0.8,
      }
    );
  }, []);

  const handleClose = () => {
    gsap.to(navRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.6,
      ease: "power1.inOut",
      onComplete: onClosed,
    });
  };

  return (
    <div
      ref={navRef}
      className="md:hidden text-clr-white border-white right-0 fixed top-0 w-[70%] min-w-[200px] max-w-[500px] bg-white/5 backdrop-blur-xl flex flex-col p-10 h-screen z-[999] mobile-nav"
    >
      <div className="relative">
        <button onClick={handleClose} className="">
          <img
            src="/assets/shared/icon-close.svg"
            alt="Close-icon"
            className="absolute right-0 h-6 cursor-pointer top-0"
          />
        </button>
      </div>
      <nav className="absolute top-72 flex text-xl justify-center items-center">
        <ul>
          <li className="pb-2 font-light flex flex-col gap-10 absolute">
            {links.map((link) => (
              <Link key={link.path} to={link.path}>
                <div className="relative inline-block group pb-3">
                  <span className="mr-4 font-extrabold">{link.number}</span>
                  {link.label}
                  <span
                    className={`absolute left-0 bottom-0 w-0 h-[5px] transition-all duration-300 group-hover:bg-white/65 group-hover:w-full ${
                      activePage == link.path
                        ? "w-full bg-white"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </div>
              </Link>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavBar;
