import { ReactComponent as Light } from "../../../assets/images/bucket/Light.svg";
import { ReactComponent as Dark } from "../../../assets/images/bucket/Dark.svg";
import { useTheme } from "../../../features/theme/use-theme";
export const Switcher = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div
      className={`flex w-full max-w-[202px]  items-center justify-between 
    font-gilroy font-[600] text-[15px] leading-[24px] text-[#6F767E] px-[4px] py-[4px] rounded-[20px]
    ${theme === "light" ? "shadow-toggleShadow bg-[#F4F4F4]" : "bg-[#111315]"}
    `}
    >
      <button
        name="light"
        className={`flex items-center px-[18px] py-[4px] rounded-[20px] duration-700 ${
          theme === "light" ? "shadow-toggleShadow bg-white" : "bg-[#272B30]"
        }`}
        onClick={toggleTheme}
      >
        <Light className="pr-[10px] w-full" />
        Light
      </button>
      <button
        name="dark"
        className={`flex items-center px-[18px] py-[4px] rounded-[20px] duration-700 ${
          theme === "dark" ? "shadow-toggleShadow bg-none" : ""
        }`}
        onClick={toggleTheme}
      >
        <Dark className="pr-[10px] w-full" />
        Dark
      </button>
    </div>
  );
};
