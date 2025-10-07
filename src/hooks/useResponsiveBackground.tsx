import { useEffect, useState } from "react";

interface ResponsiveImages {
  mobile: string;
  tablet: string;
  desktop: string;
}
export const useResponsiveBackground = ({
  mobile,
  tablet,
  desktop,
}: ResponsiveImages) => {
  const [bgImage, setBgImage] = useState(mobile);

  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setBgImage(mobile);
      } else if (width < 1024) {
        setBgImage(tablet);
      } else {
        setBgImage(desktop);
      }
    };
    updateImage();
    window.addEventListener("resize", updateImage);

    return () => window.removeEventListener("resize", updateImage);
  }, [mobile, tablet, desktop]);

  return bgImage;
};
