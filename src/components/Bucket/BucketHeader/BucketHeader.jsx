import { useEffect, useState } from "react";
import { User } from "../../UI/Bucket/User";
import { BurgerMenu } from "../Sidebar/BurgerMenu";
import { useTheme } from "../../../features/theme/use-theme";

export const BucketHeader = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth || null);
  const [theme] = useTheme();
  const headerWrapper =
    windowSize <= 600
      ? `flex py-[28px] w-full justify-between mb-[60px] ${
          theme === "dark" ? "bg-[#1B1F27] text-white" : ""
        }`
      : `flex py-[28px] w-full justify-end mb-[60px] ${
          theme === "dark" ? "bg-[#1B1F27] text-white" : ""
        }`;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={headerWrapper}>
      {windowSize <= 600 && <BurgerMenu />}
      <User />
    </div>
  );
};
