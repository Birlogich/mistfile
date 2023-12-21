import { planCardsArr } from "../../MockData/plansCardArr";
import { PlanCard } from "../UI/PlanCard";
import { nanoid } from "@reduxjs/toolkit";

export const ChoosePlan = () => {
  return (
    <div className="flex flex-col bg-[#F9F9F9] h-full items-center pt-[80px] h-full">
      <h2 className="text-black font-[700] text-[32px] leading-[32px] mb-[100px]">
        Choose the plan
      </h2>
      <div className="flex justify-between flex-wrap w-full max-w-[760px]">
        {planCardsArr.map((card) => (
          <PlanCard {...card} key={nanoid()} />
        ))}
      </div>
    </div>
  );
};
