import { useState } from "react";
import { BucketHeader } from "../BucketHeader/BucketHeader";
import { AddNewPayment } from "../../UI/Settings/AddNewPayment";
import { useTheme } from "../../../features/theme/use-theme";

export const Setting = () => {
  const [theme] = useTheme();
  const [showNewPayment, setShowNewPayment] = useState(false);

  return (
    <div className={`flex w-full ${theme === "dark" ? "bg-[#1B1F27]" : ""}`}>
      <div className="text-black w-full px-[40px] flex items-center flex-col">
        <BucketHeader />
        <div className="flex w-full justify-start mb-[32px]">
          <h2
            className={`text-poppins text-[24px] font-[600] ${
              theme === "dark" ? "text-[#92929D]" : ""
            }`}
          >
            Settings
          </h2>
        </div>
        <div className="flex flex-col w-full">
          <p
            className={`text-[20px] leading-[23px] font-[400] text-left mb-[33px] ${
              theme === "dark" ? "text-[#92929D]" : ""
            }`}
          >
            General Information
          </p>
          <form className="flex flex-col">
            <label className="flex w-full items-center justify-center border-dashed rounded-[5px] border-[1px] border-[#EEEEEE] py-[56px] text-[#778CA2] font-[500] text-[21px] mb-[25px]">
              UPLOAD IMAGE
              <input type="files" className="hidden"></input>
            </label>
            <div className="w-full flex flex-col text-left mb-[18px]">
              <label
                className={`mb-[10px] ${
                  theme === "dark" ? "text-[#92929D]" : ""
                }`}
              >
                Full Name
              </label>
              <input
                type="text"
                className="py-[18px] px-[12px] text-[14px] font-[500] text-black border-solid border-[1px] border-[#EEEEEE] rounded-[5px]"
                placeholder="Barry Armstrong"
              ></input>
            </div>
            <div
              className={`w-full flex justify-between mb-[18px] max-sm:flex-col max-sm:items-start ${
                theme === "dark" ? "text-[#92929D]" : ""
              }`}
            >
              <p>Payment method:</p>
              <p>MasterCard edning in 4078, exp: 08/2020</p>
              <button
                className={`${
                  theme === "dark" ? "text-[#92929D]" : "text-[#4D7CFE]"
                }`}
                type="button"
                onClick={(e) => setShowNewPayment(true)}
              >
                Update/Add new Payment Method
              </button>
            </div>
            <div className="flex w-full justify-end max-sm:justify-start">
              <button
                className={`flex items-center justify-center bg-black 
               rounded-[5px] max-w-[150px] px-[20px] w-full text-[15px] h-[48px] ${
                 theme === "dark" ? "text-[#92929D]" : "text-white"
               }`}
              >
                UPDATE
              </button>
            </div>
          </form>
        </div>
      </div>
      {showNewPayment && (
        <AddNewPayment onClick={() => setShowNewPayment(false)} />
      )}
    </div>
  );
};
