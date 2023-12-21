import { useEffect, useState } from "react";
import { useTheme } from "../../../features/theme/use-theme";

export const CreateButton = ({
  onClick,
  title,
  isImage,
  whiteButton,
  style,
}) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth || null);
  const [theme] = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <button
      style={style}
      className={`flex py-[12px] rounded-[15px] px-[20px] items-center max-w-[205px] max-sm:mb-[20px] ${
        whiteButton && theme !== "dark"
          ? "bg-white text-black border-[1px] border-solid border-[#E5E9F1]"
          : "bg-black text-white"
      }
      ${
        theme === "dark" && !whiteButton
          ? "border-none bg-[#272B30]"
          : "border-[1px] border-solid"
      }
      ${
        theme === "dark" && whiteButton
          ? "border-none bg-[#272B30]"
          : "border-[1px] border-solid"
      }
      `}
      onClick={onClick}
    >
      {windowSize > 500 && !isImage && !whiteButton && (
        <img
          src={require("../../../assets/images/bucket/icons/crossImg.png")}
          alt="crossImg"
        ></img>
      )}
      {windowSize > 500 && isImage && whiteButton && (
        <img
          src={require("../../../assets/images/bucket/icons/crossImgBlack.png")}
          alt="crossImg"
        ></img>
      )}
      {isImage === "uploadImg" && (
        <img
          src={require("../../../assets/images/bucket/icons/uploadImg.png")}
          alt="uploadImg"
        ></img>
      )}
      {isImage === "categoryImg" && (
        <img
          src={require("../../../assets/images/bucket/icons/categoryImg.png")}
          alt="categotyImg"
        ></img>
      )}
      <span className="text-[15px] font-[600] whitespace-nowrap">{title}</span>
    </button>
  );
};
