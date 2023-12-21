import { useTheme } from "../../../features/theme/use-theme";
import { BucketHeader } from "../BucketHeader/BucketHeader";

export const Help = () => {
  const [theme] = useTheme();
  return (
    <div
      className={` w-full h-full px-[40px] flex items-center flex-col max-md:px-[20px] ${
        theme === "dark" ? "bg-[#1B1F27] text-[#92929D]" : "text-black"
      }`}
    >
      <BucketHeader />
      <p>For any help email to support@mistfile.com</p>
    </div>
  );
};
