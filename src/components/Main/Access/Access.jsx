import bucketList from "../../../assets/images/main/bucketList.png";
import { AverageButton } from "../../UI/Main/AverageButton";

export const Access = () => {
  const props = {
    title: "Try Now Free",
    background: "bg-black",
    maxWidth: "max-w-[186px]",
    fontSize: "text-[18px]",
    paddingY: "py-[16px]",
    textColor: "text-white",
    fontWeight: "font-[500]",
    borderRadius: "rounded-[15px]",
  };
  return (
    <div className="flex flex-col items-center text-black py-[120px] px-[100px] max-md:px-[50px] max-md:py-[50px] max-sm:px-[20px]">
      <h2 className="text-[56px] leading-[64px] font-[600] mb-[50px] text-center max-md:text-[26px] max-md:mb-[25px]">
        Access your file any where, any time
      </h2>
      <div className="w-full max-w-[1440px] px-[100px] mb-[50px] max-md:hidden">
        <img src={bucketList} alt="bucketlist"></img>
      </div>
      <AverageButton {...props} />
    </div>
  );
};
