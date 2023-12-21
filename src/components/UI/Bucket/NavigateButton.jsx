import { NavLink } from "react-router-dom";
import { useTheme } from "../../../features/theme/use-theme";
export const NavigateButton = ({
  title,
  img,
  fontSize,
  fontFamily,
  onClick,
  to,
  inputElement,
}) => {
  const [theme] = useTheme();
  const ordinaryLink = `flex items-center ${fontSize} ${fontFamily} font-[700] w-full max-w-[202px] 
  rounded-[10px] mb-[12px] pl-[16px] py-[12px] pr-[0px] duration-300 pb-[15px] hover:text-white ${
    theme === "dark" ? "hover:bg-[#818181]" : "hover:bg-[#141416]"
  }`;
  const activeLink =
    theme === "dark"
      ? ` focus:bg-[#818181] focus:text-white`
      : ` focus:bg-[#141416] focus:text-white`;
  const setActive = ({ isActive }) =>
    isActive ? ordinaryLink + activeLink : ordinaryLink;
  return (
    <NavLink
      className={setActive}
      onClick={onClick}
      to={to}
      autoFocus={true}
      ref={inputElement}
    >
      <div className="w-[20px] h-[20px] text-black">{img}</div>
      <span className="ml-[10px]">{title}</span>
    </NavLink>
  );
};
