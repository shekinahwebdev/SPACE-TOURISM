import { Link } from "react-router-dom";

const DesktopNavBar = () => {
  return (
    <div className="text-clr-white border-white right-0 fixed top-0 max-w-[620px] bg-white/5 backdrop-blur-xl md:flex flex-row px-10 pt-3 w-full z-[999] desktop-header hidden">
      <nav className="w-full text-xl gap-10">
        <ul className="flex flex-row justify-between items-center w-full xl:justify-center xl:gap-20">
          <li className="pb-2 sm:pb-0 mt-8 font-light md:text-xl md:-tracking-tighter">
            <Link to="/">
              <div className="relative inline-block group pb-3 md:pb-8">
                <span className="mr-4 font-extrabold">00</span> Home
                <span className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 bg-white group-hover:w-full"></span>
              </div>
            </Link>
          </li>
          <li className="mt-8 font-light md:text-xl">
            <Link to="/destination">
              <div className="relative inline-block group pb-3  md:pb-9">
                <span className="mr-4 font-extrabold">01</span> Destination
                <span className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 bg-white group-hover:w-full"></span>
              </div>
            </Link>
          </li>
          <li className="mt-8 font-light md:text-xl">
            <Link to="/crew">
              <div className="relative inline-block group pb-3  md:pb-8">
                <span className="mr-4 font-extrabold">02</span> Crew
                <span className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 bg-white group-hover:w-full"></span>
              </div>
            </Link>
          </li>
          <li className="mt-8 font-light md:text-xl">
            <Link to="/technology">
              <div className="relative inline-block group pb-3 md:pb-8">
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

export default DesktopNavBar;
