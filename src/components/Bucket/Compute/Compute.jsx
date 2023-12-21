import { useState } from "react";
import { useTheme } from "../../../features/theme/use-theme";
import { CreateButton } from "../../UI/Bucket/CreateButton";
import { BucketHeader } from "../BucketHeader/BucketHeader";
import { useGetQuota } from "../../../customHooks/useGetQuota";
import { Instance } from "../../UI/Bucket/Compute/Instance";

export const Compute = () => {
  const [theme] = useTheme();
  const [showQuote, setShowQuote] = useState(false);
  const [quotas, status] = useGetQuota();

  return (
    <div
      className={`text-black w-full px-[40px] overflow-y-scroll flex items-center flex-col relative ${
        theme === "dark" ? "bg-[#1B1F27] text-white" : ""
      }`}
    >
      <BucketHeader />
      <div className="flex w-full justify-between mb-[150px] max-sm:flex-col max-md:mb-[50px]">
        <h2
          className={`text-poppins text-[24px] font-[600] max-sm:mb-[20px] ${
            theme === "dark" ? "text-[#92929D]" : "text-black"
          }`}
        >
          Compute Engine
        </h2>
        {quotas.length > 1 /* && status === "fulfilled" */ && (
          <div className="flex w-full max-w-[350px] justify-between">
            <CreateButton title={"Set a Quota"} />
            <CreateButton
              title={"Create Instance"}
              whiteButton={true}
              isImage={true}
            />
          </div>
        )}
      </div>
      {quotas.length < 1 && (
        <div className="flex flex-col justify-center items-center">
          <img
            src={require("../../../assets/images/bucket/IconNodata.png")}
            className="max-w-[252px] mb-[16px]"
            alt="noDataFound"
          ></img>
          <p className="text-[16px] font-[500] text-gilroy mb-[16px] max-w-[252px] text-center">
            No dedicated servers found. Set your quota (limits) first.
          </p>
          <CreateButton
            onClick={() => setShowQuote(true)}
            title={"Set a Quota"}
          />
        </div>
      )}
      {quotas.length > 1 && status === "loading" && (
        <div className="flex flex-col justify-center items-center">
          <img
            src={require("../../../assets/images/bucket/IconNodata.png")}
            className="max-w-[252px] mb-[16px]"
            alt="noDataFound"
          ></img>
          <p className="text-[16px] font-[500] text-gilroy mb-[16px] max-w-[252px] text-center">
            We are generating your servers. They will appear here when ready.
          </p>
          <CreateButton
            onClick={() => setShowQuote(true)}
            title={"Set a Quota"}
          />
        </div>
      )}
      {quotas.length > 1 /* && status === "fulfilled"  */ && (
        <div className="flex flex-col w-full">
          <table className="flex flex-col w-full border-[1px] border-t-[#C1C1C1] border-solid">
            <thead className="w-full flex">
              <tr className="flex w-full justify-between bg-[#F0F0F0]">
                <th className="flex w-[14%] max-w-[185px] bg-[#F0F0F0] border-[#C1C1C1] border-r-[1px] border-l-[1px] border-b-[1px] border-solid px-[12px] py-[10px] text-[12px] font-[600] overflow-x-auto">
                  Name
                </th>
                <th className="flex w-[14%] max-w-[185px] bg-[#F0F0F0] border-[#C1C1C1] border-r-[1px] border-b-[1px] border-solid px-[12px] py-[10px] text-[12px] font-[600] overflow-x-auto">
                  IP Address
                </th>
                <th className="flex w-[14%] max-w-[185px] bg-[#F0F0F0] border-[#C1C1C1] border-r-[1px] border-b-[1px] border-solid px-[12px] py-[10px] text-[12px] font-[600] overflow-x-auto">
                  Region
                </th>
                <th className="flex w-[14%] max-w-[249px] bg-[#F0F0F0] border-[#C1C1C1] border-r-[1px] border-b-[1px] border-solid px-[12px] py-[10px] text-[12px] font-[600] overflow-x-auto">
                  SSH Login
                </th>
                <th className="flex w-[14%] max-w-[176px] bg-[#F0F0F0] border-[#C1C1C1] border-r-[1px] border-b-[1px] border-solid px-[12px] py-[10px] text-[12px] font-[600] overflow-x-auto">
                  SSH Password
                </th>
                <th className="flex w-[14%] max-w-[185px] bg-[#F0F0F0] border-[#C1C1C1] border-r-[1px] border-b-[1px] border-solid px-[12px] py-[10px] text-[12px] font-[600] overflow-x-auto">
                  Size
                </th>
                <th className="flex w-[14%] max-w-[185px] bg-[#F0F0F0] border-[#C1C1C1] border-r-[1px] border-b-[1px] border-solid px-[12px] py-[10px] text-[12px] font-[600] overflow-x-auto">
                  Expiration Date
                </th>
              </tr>
            </thead>
            <tbody>
              <Instance />
              <Instance />
              <Instance />
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
