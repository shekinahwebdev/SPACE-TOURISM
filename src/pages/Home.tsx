import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  useGSAP(() => {
    const spaceSplit = new SplitText(".space-text", { type: "chars" });
    const descSplit = new SplitText(".des", { type: "chars" });
    const tl = gsap.timeline();

    tl.from(".travel-text", {
      yPercent: -100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    });

    tl.from(
      spaceSplit.chars,
      {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.1,
      },
      "-=0.3"
    );

    tl.from(descSplit.chars, {
      xPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.inOut",
      stagger: 0.01,
    });
  });

  const navigate = useNavigate();
  return (
    <section>
      <div className="my-20 flex flex-col items-center gap-5 h-full text-center text-white md:my-24 content xl:px-32">
        <div className="flex flex-col gap-2.5 items-center w-full top-content">
          <h1 className="text-3xl uppercase text-clr-fog text-center xl:text-4xl travel-text">
            So, you want to travel to
          </h1>
          <span className="text-8xl space uppercase mt-3.5 md:text-9xl space-text">
            Space
          </span>
          <p className="text-[18px] text-clr-fog px-8 md:px-28 xl:text-left xl:px-0 des">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <button
          onClick={() => navigate("/destination/moon")}
          className="bg-clr-white text-clr-cinder w-[250px] h-[250px] rounded-full text-4xl md:text-5xl uppercase mt-28 md:w-[300px] md:h-[300px] btn-explore"
        >
          Explore
        </button>
      </div>
    </section>
  );
};
