import React, { useEffect, useRef, useState } from "react";
import { NavigateButton } from "../../UI/Bucket/NavigateButton";

import { ReactComponent as Buckets } from "../../../assets/images/bucket/Buckets.svg";
import { ReactComponent as Partner } from "../../../assets/images/bucket/Partner.svg";
import { ReactComponent as Setting } from "../../../assets/images/bucket/Setting.svg";
import { ReactComponent as Billing } from "../../../assets/images/bucket/Billing.svg";
import { ReactComponent as Help } from "../../../assets/images/bucket/Help.svg";
import { ReactComponent as Compute } from "../../../assets/images/bucket/Compute.svg";
import darkLogo from "../../../assets/images/bucket/sidebar/mainLogoDarkTheme.png";
import lightLogo from "../../../assets/images/bucket/sidebar/mainLogoLightTheme.png";
import { Switcher } from "./Switcher";
import { useTheme } from "../../../features/theme/use-theme";

export const Sidebar = () => {
  const inputElement = useRef(null);
  const [theme] = useTheme();

  useEffect(() => {
    inputElement.current?.focus();
  }, []);

  const sidebarWrapperStyle =
    theme === "dark"
      ? "flex flex-col h-full w-full max-w-[250px] bg-[#1B1F27] items-center px-[24px] py-[37px] font-poppins border-[#818181] border-r-[1px] border-solid"
      : "flex flex-col h-full w-full max-w-[250px] bg-[#F9F9F9] items-center px-[24px] py-[37px] font-poppins";

  return (
    <div className={sidebarWrapperStyle}>
      <div className="flex w-full justify-start items-center text-black border-b-[1px] border-solid border-[#EDF0F4] pb-[21px] mb-[40px] ml-[30px]">
        <img src={theme === "dark" ? lightLogo : darkLogo} />

        <span
          className={`font-[600] leading-[27px] text-[22px] ml-[7px] ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          MISTFILE
        </span>
      </div>
      <div className="w-full flex flex-col flex-auto items-start text-[#718096] font-manrope font-[500] text-[14px] leading-[21px] tracking-[0.2px] flex-auto">
        <NavigateButton
          title="Buckets"
          to="/"
          img={<Buckets />}
          inputElement={inputElement}
        />
        <NavigateButton title="Compute" to="/compute" img={<Compute />} />
        <NavigateButton title="Refer" to="/partner" img={<Partner />} />
        <NavigateButton title="Setting" to="/setting" img={<Setting />} />
        <NavigateButton title="Billing" to="/billing" img={<Billing />} />
        <NavigateButton title="Help" to="/help" img={<Help />} />
      </div>
      <Switcher />
    </div>
  );
};
