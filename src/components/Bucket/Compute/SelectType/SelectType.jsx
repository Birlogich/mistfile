import React, { useState } from "react";
import { useTheme } from "../../../../features/theme/use-theme";
import { BucketHeader } from "../../BucketHeader/BucketHeader";
import { ServerType } from "../../../UI/Bucket/Compute/ServerType";
import { CreateButton } from "../../../UI/Bucket/CreateButton";
import { Location } from "../../../UI/Bucket/Compute/Location";
import { useNavigate } from "react-router-dom";

export const SelectType = () => {
  const [theme] = useTheme();
  const navigate = useNavigate();
  const [showType, setShowType] = useState(true);
  const [showLocation, setShowLocation] = useState(false);
  const [showLimits, setShowLimits] = useState(false);
  const [showEnterQuota, setShowEnterQuota] = useState(false);

  const [data, setData] = useState({
    serverType: "",
    location: "",
    limits: "",
  });

  const resetCollectData = () => {
    setShowType(true);
    setShowLocation(false);
    setShowLimits(false);
    setShowEnterQuota(false);
    setData({
      serverType: "",
      location: "",
      limits: "",
    });
  };

  const getServerType = (e, serverType) => {
    e.preventDefault();
    setData({ ...data, serverType: serverType });
  };

  console.log(data);

  return (
    <div
      className={`text-black w-full px-[40px] overflow-y-scroll flex items-center flex-col relative ${
        theme === "dark" ? "bg-[#1B1F27] text-white" : ""
      }`}
    >
      <BucketHeader />
      {showType && (
        <form
          className="flex flex-col items-center w-full max-w-[721px]"
          onSubmit={(e) => getServerType(e)}
        >
          <h2
            className={`text-poppins text-[24px] font-[600] mb-[25px] max-sm:mb-[20px] ${
              theme === "dark" ? "text-[#92929D]" : "text-black"
            }`}
          >
            Compute Engine
          </h2>
          <div className="font-ubuntu flex flex-col items-start w-full mb-[10px]">
            <h2
              className={`text-[24px] font-[600] mb-[15px] max-sm:mb-[20px] ${
                theme === "dark" ? "text-[#92929D]" : "text-black"
              }`}
            >
              Server Type
            </h2>
            <p
              className={`text-[12px] font-[400] ${
                theme === "dark" ? "text-[#92929D]" : "text-black"
              }`}
            >
              All servers include DDOS protection and unlimited bandwidth and at
              least 1 Gbps NIC.{" "}
            </p>
          </div>
          <div className="flex flex-col w-full">
            <ServerType />
            <ServerType />
            <ServerType />
          </div>
          <div className="flex justify-end w-full">
            <CreateButton
              title={"Cancel"}
              isImage={false}
              whiteButton={true}
              style={{ marginRight: "10px" }}
              onClick={resetCollectData}
            />
            <CreateButton
              title={"Continue"}
              isImage={true}
              onClick={() => {
                setShowType(false);
                setShowLocation(true);
              }}
            />
          </div>
        </form>
      )}
      {showLocation && (
        <div className="flex flex-col items-center w-full max-w-[825px]">
          <div className="flex flex-col items-center w-full">
            <h2
              className={`text-poppins text-[24px] font-[600] mb-[25px] max-sm:mb-[20px] ${
                theme === "dark" ? "text-[#92929D]" : "text-black"
              }`}
            >
              Compute Engine
            </h2>
            <div className="font-ubuntu flex flex-col items-start w-full mb-[10px]">
              <h2
                className={`text-[24px] font-[600] mb-[15px] max-sm:mb-[20px] ${
                  theme === "dark" ? "text-[#92929D]" : "text-black"
                }`}
              >
                Location
              </h2>
              <p
                className={`text-[12px] font-[400] ${
                  theme === "dark" ? "text-[#92929D]" : "text-black"
                }`}
              >
                All servers are hosted within Tier 3/4 datacenters and securely
                connected to our distributed compute network.
              </p>
            </div>
            <div className="flex flex-wrap px-[30px] w-full pb-[10px] border-b-[1px] border-[#EAEAEA] border-solid mb-[10px]">
              <Location />
              <Location />
              <Location />
              <Location />
              <Location />
              <Location />
              <Location />
              <Location />
              <Location />
            </div>
          </div>
          <div className="flex justify-end w-full">
            <CreateButton
              title={"Cancel"}
              isImage={false}
              whiteButton={true}
              style={{ marginRight: "10px" }}
              onClick={resetCollectData}
            />
            <CreateButton
              title={"Continue"}
              isImage={true}
              onClick={() => {
                setShowLocation(false);
                setShowEnterQuota(true);
              }}
            />
          </div>
        </div>
      )}
      {showEnterQuota && (
        <div className="flex flex-col items-center w-full max-w-[825px]">
          <div className="flex flex-col items-center w-full">
            <h2
              className={`text-poppins text-[24px] font-[600] mb-[25px] max-sm:mb-[20px] ${
                theme === "dark" ? "text-[#92929D]" : "text-black"
              }`}
            >
              Compute Engine
            </h2>
            <div className="font-ubuntu flex flex-col items-start w-full mb-[10px]">
              <h2
                className={`text-[24px] font-[600] mb-[15px] max-sm:mb-[20px] ${
                  theme === "dark" ? "text-[#92929D]" : "text-black"
                }`}
              >
                Enter quota
              </h2>
              <p
                className={`text-[12px] font-[400] ${
                  theme === "dark" ? "text-[#92929D]" : "text-black"
                }`}
              >
                Please enter the amount of the quota of servers you want to
                create. You will be added automatically to the waitlist if the
                server type is not available. Servers have expiration dates and
                terminate on the 1st of each month or within 7 days.
              </p>
            </div>
            <div className="flex flex-wrap px-[30px] w-full pb-[10px] border-b-[1px] border-[#EAEAEA] border-solid mb-[10px]">
              <div className="flex w-full p-[12px] border-[1px] border-[#F0F2F7] border-solid rounded-[10px] text-[16px] mb-[10px]">
                4 vCPUs · 8 GB RAM · 150 GB NVMe · 1 Gbps NIC
              </div>
              <div className="flex w-full p-[12px] border-[1px] border-[#F0F2F7] border-solid rounded-[10px] text-[16px] mb-[10px]">
                HonoLulu · United States
              </div>
              {!showLimits && (
                <input
                  className="flex w-full p-[12px] border-[1px] border-[#F0F2F7] border-solid rounded-[10px] text-[16px] mb-[10px]"
                  placeholder="Enter the amount of servers which you want to create"
                ></input>
              )}
              {showLimits && (
                <>
                  <div
                    className="flex w-full p-[12px] border-[1px] border-[#F0F2F7] border-solid rounded-[10px] text-[16px] mb-[10px]"
                    placeholder="Enter the amount of servers which you want to create"
                  >
                    10
                  </div>
                  <div
                    className="flex flex-col w-full p-[12px] border-[1px] border-[#F0F2F7] border-solid rounded-[10px] text-[16px] mb-[10px]"
                    placeholder="Enter the amount of servers which you want to create"
                  >
                    <p className="text-[12px] font-ubuntu font-[700] mb-[10px]">
                      Billing
                    </p>
                    <p className="text-[12px] font-ubuntu font-[700] mb-[10px]">
                      $0.03/hr ($22 a month)
                    </p>
                    <p className="text-[12px] font-ubuntu font-[700] mb-[10px]">
                      $220 per month expected for 10 servers
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex justify-end w-full">
            <CreateButton
              title={"Cancel"}
              isImage={false}
              whiteButton={true}
              style={{ marginRight: "10px" }}
              onClick={resetCollectData}
            />
            {!showLimits && (
              <CreateButton
                title={"Continue"}
                isImage={true}
                onClick={() => {
                  setShowLocation(false);
                  setShowLimits(true);
                }}
              />
            )}
            {showLimits && (
              <CreateButton
                title={"Continue"}
                isImage={true}
                onClick={() => {
                  navigate("../checkout");
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
