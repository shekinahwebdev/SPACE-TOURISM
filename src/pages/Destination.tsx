import { Link, useParams } from "react-router-dom";
import { data } from "../data/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Destination = () => {
  const { planet } = useParams();

  const destination =
    data.destinations.find(
      (item) => item.name.toLowerCase() === planet?.toLowerCase()
    ) || data.destinations[0];

  useGSAP(() => {
    const titleSplit = new SplitText(".destination-title", {
      type: "chars",
    });
    const descSplit = new SplitText(".destination-desc", { type: "words" });
    gsap.from(titleSplit.chars, {
      yPercent: -100,
      opacity: 0,
      duration: 2,
      ease: "expo.out",
      stagger: 1,
    });

    gsap.from(".image", {
      x: 0,
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(descSplit.words, {
      y: 150,
      opacity: 0,
      duration: 1,
      ease: "power4",
      stagger: 0.07,
    });
  }, [destination.name]);

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-full text-center text-white md:mt-9 xl:mt-20 destination-content xl:px-52">
      <p className="text-white/15 font-bold text-2xl uppercase xl:text-4xl">
        01
        <span className="ml-3 text-3xl text-clr-fog font-thin xl:text-4xl">
          Pick your destination
        </span>
      </p>
      <div className="flex flex-col xl:gap-28 w-full items-center gap-8 mt-6 md:mt-2 xl:mt-16 destination-main xl:inline-flex xl:flex-row">
        <div>
          <img
            src={destination.images.png}
            alt={destination.name}
            className="w-[250px] sm:w-[300px] xl:w-[1200px] image"
          />
        </div>
        <div className="pt-5 xl:pt-0">
          <nav className="">
            <ul className="flex flex-row items-center justify-center  text-clr-fog text-2xl gap-6">
              <li className="flex flex-row gap-10">
                {data.destinations.map((list) => {
                  const isActive =
                    list.name.toLowerCase() === destination.name.toLowerCase();
                  return (
                    <Link
                      key={list.name}
                      to={`/destination/${list.name.toLowerCase()}`}
                    >
                      <div className="relative inline-block group pb-2.5">
                        <span className="">{list.name}</span>
                        <span
                          className={`absolute left-0 bottom-0 w-0 h-[5px] transition-all duration-300 group-hover:bg-white/65 group-hover:w-full ${
                            isActive
                              ? "w-full bg-white"
                              : "w-0 group-hover:w-full"
                          }`}
                        ></span>
                      </div>
                    </Link>
                  );
                })}
              </li>
            </ul>
          </nav>
          <div className="px-10 py-5 md:py-0 md:pt-7">
            <h1 className="text-7xl uppercase font-display xl:text-8xl destination-title">
              {destination.name}
            </h1>
            <span className="text-clr-fog mt-9 text-[1.2rem] destination-desc">
              {destination.description}
            </span>
            <div className="bg-white/15 h-0.5 w-full my-5"></div>
            <p className="text">Avg. distance</p>
            <span className="text-info md:text-4xl destination-desc">
              {destination.distance}
            </span>
            <p className="text mt-6">Est. travel time</p>
            <span className="text-info md:text-4xl destination-desc">
              {destination.travel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
