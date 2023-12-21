import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { rootReducer } from "../../../store";
import { useTheme } from "../../../features/theme/use-theme";

const arrowDown = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6L8 10L12 6"
      stroke="#718096"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const User = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [theme] = useTheme();
  const { email } = useSelector((state) => state.verifyUser);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    rootReducer(undefined, "USER_LOGOUT");
    navigate("../../../");
    window.location.reload();
  };

  const userWrapper = `flex border-[#EDEDED] border-1px border-solid
  items-center py-[10px] px-[20px] rounded-[20px] relative h-[45px] ${
    theme === "dark"
      ? "bg-[#272B30] text-[#92929D]"
      : "text-black bg-[#FAFAFA] "
  }`;

  return (
    <div className={userWrapper}>
      <span className="font-[600] text-[16px] leading-[24px] mr-[18px]">
        {email.split("@")[0]}
      </span>
      <button onClick={() => setIsMenu(!isMenu)}>{arrowDown}</button>
      {isMenu && (
        <div className="flex items-center py-[10px] px-[20px] absolute top-[50px] right-0">
          <button
            className={`font-[600] text-[16px] leading-[24px] mr-[18px] ${
              theme === "dark" ? "text-white" : ""
            }`}
            onClick={logout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
