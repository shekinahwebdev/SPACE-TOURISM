import { useLocation } from "react-router-dom";
import { useResponsiveBackground } from "./useResponsiveBackground";

export const usePageBackground = () => {
  const location = useLocation();
  const path = location.pathname;

  let bgSet = {
    mobile: "/assets/home/background-home-mobile.jpg",
    tablet: "/assets/home/background-home-tablet.jpg",
    desktop: "/assets/home/background-home-desktop.jpg",
  };

  switch (path) {
    case "/destination":
      bgSet = {
        mobile: "/assets/destination/background-destination-mobile.jpg",
        tablet: "/assets/destination/background-destination-tablet.jpg",
        desktop: "/assets/destination/background-destination-desktop.jpg",
      };
      break;
    case "/crew":
      bgSet = {
        mobile: "/assets/crew/background-crew-mobile.jpg",
        tablet: "/assets/crew/background-crew-tablet.jpg",
        desktop: "/assets/crew/background-crew-desktop.jpg",
      };
      break;
    case "/technology":
      bgSet = {
        mobile: "/assets/technology/background-technology-mobile.jpg",
        tablet: "/assets/technology/background-technology-tablet.jpg",
        desktop: "/assets/technology/background-technology-desktop.jpg",
      };
      break;
    default:
      break;
  }

  const bgImage = useResponsiveBackground(bgSet);
  return bgImage;
};
