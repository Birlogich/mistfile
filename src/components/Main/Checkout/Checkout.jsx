import React from "react";
import { useNavigate } from "react-router-dom";
import { SelectPlan } from "../../UI/Main/SelectPlan";
import { CreditCard } from "../../UI/Main/CreditCard";
import selectPlanArr from "../../MockData/selectPlanArr.json";

const arrowLeft = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 16L6 12M6 12L10 8M6 12L18 12"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Checkout = () => {
  const navigate = useNavigate();

  const goBack = () => navigate("../");

  return (
    <div className="flex flex-col bg-[#F9F9F9] text-black w-full h-full items-center pb-[86px] pt-[80px] px-[20px]">
      <div className="flex w-full max-w-[935px] mb-[45px]">
        <button
          onClick={goBack}
          className="text-[16px] leading-[24px] font-[600] flex items-center"
        >
          {arrowLeft}
          <span className="mr-[8px]">Go Back</span>
        </button>
        <h2 className="font-[700] text-[32px] leading-[32px] flex-auto text-center">
          Checkout
        </h2>
      </div>
      {selectPlanArr.map((plan, index) => {
        if (index === 1) {
          return <SelectPlan {...plan} key={plan.id} />;
        } else {
          return null;
        }
      })}
      <CreditCard />
    </div>
  );
};
