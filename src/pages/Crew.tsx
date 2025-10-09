import { Link, useParams } from "react-router-dom";
import { data } from "../data/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Crew = () => {
  const { crewId } = useParams();
  const crew =
    data.crews.find(
      (item) => item.name.toLowerCase() === crewId?.toLowerCase()
    ) || data.crews[0];

  useGSAP(() => {
    const nameSplit = new SplitText(".crew-name", { type: "chars" });
    const bioSplit = new SplitText(".bio", { type: "chars" });
    const tl = gsap.timeline();
    tl.from(".role", {
      yPercent: -100,
      opacity: 0,
      duration: 1,
      ease: "expo.inOut",
      stagger: 0.02,
    });

    tl.from(".crew", {
      x: 100,
      y: 0,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    tl.from(
      nameSplit.chars,
      {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "expo.in",
        stagger: 0.08,
      },
      "-=0.5"
    );

    tl.from(bioSplit.chars, {
      xPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.inOut",
      stagger: 0.01,
    });
  }, [crew.name]);

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-full my-24 text-center text-white md:mt-9 xl:mt-20 destination-content xl:px-52">
      <p className="text-white/25 font-bold text-2xl uppercase xl:text-4xl">
        02
        <span className="ml-3 text-3xl text-clr-fog font-thin xl:text-4xl">
          Meet your crew
        </span>
      </p>
      <div className="flex flex-col xl:gap-28 w-full items-center justify-center mt-6 destination-main xl:inline-flex xl:flex-row xl:justify-start xl:text-left">
        <div className="">
          <h2 className="text-white/25 font-bold text-2xl uppercase font-display xl:text-4xl role">
            {crew.role}
          </h2>
          <p className="text-clr-white uppercase text-4xl font-display xl:text-5xl xl:pt-3 crew-name">
            {crew.name}
          </p>
          <p className="text-clr-fog text-[1.2rem] mt-6 px-7 md:px-40 xl:px-0 bio">
            {crew.bio}
          </p>
          <div className="flex flex-row gap-5 xl:gap-14 justify-center mt-10 xl:pt-16 xl:justify-start">
            {data.crews.map((list) => {
              const isActive =
                list.name.toLowerCase() === crew.name.toLowerCase();

              return (
                <Link key={list.name} to={`/crew/${list.name.toLowerCase()}`}>
                  <div className="relative inline-block group">
                    <div className="w-5 h-5 bg-white/20 rounded-full"></div>
                    <div
                      className={`absolute left-0 bottom-0 w-5 h-5 rounded-full transition-all duration-300 group-hover:bg-white group-hover:w-full ${
                        isActive ? "w-5 bg-white" : "bg-white/20"
                      }`}
                    ></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mt-7 xl:mt-[-100px]">
          <img
            src={crew.images.png}
            alt="Crew Members"
            className="w-[340px] sm:w-[370px] xl:w-[1222px] crew"
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
