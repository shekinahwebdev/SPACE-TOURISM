import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const MobileNavBar = ({ onClosed }: { onClosed: () => void }) => {
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
        <button onClick={handleClose}>
          <img
            src="/assets/shared/icon-close.svg"
            alt="Close-icon"
            className="absolute right-0 h-6 cursor-pointer"
          />
        </button>
      </div>
      <nav className="absolute top-60 flex text-xl justify-center items-center gap-10">
        <ul>
          <li className="pb-2 font-light">
            <Link to="\">
              <div className="relative inline-block group pb-3">
                <span className="mr-4 font-extrabold">00</span> Home
                <span className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 bg-white group-hover:w-full"></span>
              </div>
            </Link>
          </li>
          <li className="mt-8  font-light">
            <Link to="">
              <div className="relative inline-block group pb-3">
                <span className="mr-4 font-extrabold">01</span> Destination
                <span className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 bg-white group-hover:w-full"></span>
              </div>
            </Link>
          </li>
          <li className="mt-8  font-light">
            <Link to="">
              <div className="relative inline-block group pb-3">
                <span className="mr-4 font-extrabold">02</span> Crew
                <span className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 bg-white group-hover:w-full"></span>
              </div>
            </Link>
          </li>
          <li className="mt-8  font-light">
            <Link to="">
              <div className="relative inline-block group pb-3">
                <span className="mr-4 font-extrabold">03</span> Technology
                <span className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 bg-white group-hover:w-full"></span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavBar;
