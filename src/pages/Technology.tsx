import { Link, useParams } from "react-router-dom";
import { data } from "../data/data";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Technology = () => {
  const { techId } = useParams();

  const tech =
    data.technology.find(
      (item) => item.name.toLowerCase() === techId?.toLowerCase()
    ) || data.technology[0];

  useGSAP(() => {
    const nameSplit = new SplitText(".tech-name", { type: "chars" });
    const bioSplit = new SplitText(".tech-desc", { type: "chars" });
    const tl = gsap.timeline();
    tl.from(".role", {
      yPercent: -100,
      opacity: 0,
      duration: 1,
      ease: "expo.inOut",
      stagger: 0.02,
    });

    tl.from(".tech-image", {
      x: 0,
      y: 100,
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
  }, [tech.name]);

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-full text-center text-white md:mt-9 xl:mt-20 destination-content xl:px-40">
      <p className="text-white/25 font-bold text-2xl uppercase xl:text-4xl">
        03
        <span className="ml-3 text-3xl text-clr-fog font-thin xl:text-4xl">
          Space launch 101
        </span>
      </p>
      <div className="flex flex-col xl:gap-20 w-full items-center justify-center mt-3.5 destination-main xl:inline-flex xl:flex-row-reverse xl:justify-start xl:text-left">
        <div className="xl:mt-[-120px]">
          <img
            src={tech.images.portrait}
            alt="Technology image"
            className="w-[400px] sm:w-[900px] h-[400px] xl:w-[1800px] xl:h-[600px] tech-image"
          />
        </div>
        <div className="launch flex flex-col items-center">
          <div className="flex flex-row gap-5  xl:gap-14 justify-center items-center mt-10 xl:mt-0 xl:pt-0 xl:flex-col xl:justify-center">
            {data.technology.map((list, index) => {
              const isActive =
                list.name.toLowerCase() === tech.name.toLowerCase();
              return (
                <Link
                  key={list.name}
                  to={`/technology/${list.name.toLowerCase()}`}
                >
                  <div className="relative inline-block group">
                    <div
                      className={`absolute inset-0 rounded-full border-2 border-clr-white transition-all duration-300 ${
                        isActive
                          ? "bg-white border-white"
                          : "border-clr-white group-hover:bg-white group-hover:border-white"
                      }`}
                    ></div>
                    <p
                      className={`relative z-10 w-14 xl:w-24 xl:h-24 h-14 flex xl:text-2xl items-center justify-center rounded-full transition-colors duration-300 group-hover:text-clr-cinder ${
                        isActive
                          ? "text-clr-cinder"
                          : "text-white group-hover:text-clr-cinder"
                      }`}
                    >
                      {index + 1}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 pl-7">
            <p className="text-white/25  uppercase text-2xl md:text-3xl xl:text-5xl font-display xl:mb-4 role">
              The terminology...
            </p>
            <span className="text-clr-white uppercase text-4xl  md:text-5xl mb-3 xl:mb-0 xl:my-3 xl:text-6xl font-display tech-name">
              {tech.name}
            </span>
            <p className="text-clr-fog text-[1.2rem] mt-6 xl:mt-5 px-7 md:px-40 xl:px-0 xl:text-xl tech-desc">
              {tech.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
