import { Link, useLocation } from "react-router-dom";

const DesktopNavBar = () => {
  const location = useLocation();

  const links = [
    { path: "/", number: "00", label: "Home" },
    { path: "/destination", number: "01", label: "Destination" },
    { path: "/crew", number: "02", label: "Crew" },
    { path: "/technology", number: "03", label: "Technology" },
  ];

  return (
    <div className="text-clr-white border-white right-0 fixed top-0 max-w-[620px] bg-white/5 backdrop-blur-xl md:flex flex-row px-10 pt-3 w-full z-[999] desktop-header hidden">
      <nav className="w-full text-xl gap-10">
        <ul className="flex flex-row justify-between items-center w-full xl:justify-center xl:gap-20">
          <li className="pb-2 sm:pb-0 mt-8 font-light md:text-xl md:-tracking-tighter md:gap-9 md:flex">
            {links.map((link) => {
              const isActive =
                location.pathname === link.path ||
                location.pathname.startsWith(link.path + "/");

              return (
                <Link key={link.path} to={link.path}>
                  <div className="relative inline-block group pb-3 md:pb-8">
                    <span className="mr-4 font-extrabold">{link.number}</span>
                    {link.label}
                    <span
                      className={`absolute left-0 bottom-0 h-[5px] transition-all duration-300 group-hover:bg-white/65 ${
                        isActive ? "w-full bg-white" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </div>
                </Link>
              );
            })}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNavBar;
