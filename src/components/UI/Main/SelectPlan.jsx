export const SelectPlan = ({ plan, description, price, isBilling }) => {
  return (
    <div
      className={`flex flex-col w-full ${
        isBilling
          ? "bg-[#FCFCFC] border-[1px] border-solid border-[#D0D0D0] py-[22px] px-[33px]"
          : "bg-white max-w-[935px] mb-[32px] pl-[30px] pr-[44px] h-[163px] "
      } rounded-[25px] overflow-hidden max-sm:p-[10px] max-md:h-[200px]`}
    >
      {!isBilling && (
        <p className="bg-black text-[15px] leading-[18px] text-white px-[10px] pt-[7px] pb-[3px] max-w-[111px] rounded-[10px] mt-[-5px] mb-[15px]">
          Selected
        </p>
      )}
      <div className="flex items-center justify-between text-black max-md:flex-col">
        <div className="flex flex-col items-start max-md:items-center">
          <p className="text-[22px] font-[700] leading-[34px]">{plan}</p>
          <p className="max-w-[440px] text-[16px] font-[400] leading-[24px] max-sm:text-[14px] max-md:text-center">
            {description}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-[700] text-[40px] leading-[48px] mr-[37px] font-inter max-sm:text-[26px] max-md:mr-0">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};
