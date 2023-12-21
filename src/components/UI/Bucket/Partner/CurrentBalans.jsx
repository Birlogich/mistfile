import balance from "../../../../assets/images/bucket/PartnerPage/balance.png";
import { useTheme } from "../../../../features/theme/use-theme";

export const CurrentBalans = ({ onClick, userBalans }) => {
  const [theme] = useTheme();
  return (
    <div
      className={`flex flex-col w-full py-[28px] px-[24px] border-[1px] border-solid border-[#E1E1E1] rounded-[15px] ${
        theme === "dark" ? "bg-[#1B1F27]" : "bg-[#FCFCFC]"
      }`}
    >
      <p
        className={`font-[600] text-[22px] leading-[32px] mb-[36px] ${
          theme === "dark" ? "text-[#92929D]" : ""
        }`}
      >
        CurrentBalans
      </p>
      <div className="flex w-full justify-between">
        <div className="flex items-start">
          <img
            src={balance}
            alt="balance"
            className="mr-[24px] w-[48px] h-[48px] max-md:hidden"
          ></img>
          <div className="flex flex-col">
            <p
              className={`font-[600] text-[13px] leading-[16px] mb-[8px] ${
                theme === "dark" ? "text-[#92929D]" : "text-[#6F767E]"
              }`}
            >
              Current account balance
            </p>
            <p className="font-[600] text-[48px] leading-[48px]">
              ${userBalans}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={onClick}
            className={`flex items-center justify-center bg-black rounded-[15px] 
            max-w-[176px] px-[20px] w-full text-[15px] h-[48px]
            ${theme === "dark" ? "text-[#92929D]" : "text-white"}
            `}
          >
            Withdraw balance
          </button>
        </div>
      </div>
    </div>
  );
};
