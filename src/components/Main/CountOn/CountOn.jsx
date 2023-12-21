export const CountOn = () => {
  return (
    <div className="w-full px-[100px] bg-[#E1EEF3] max-md:px-[50px]  max-sm:px-[20px]">
      <div className="flex flex-col items-center mb-[120px] text-black max-md:mb-[50px]">
        <h2 className="my-[66px] font-[600] text-[48px] leading-[57px] text-center max-md:my-[40px] max-md:text-[26px]">
          Cloud storage you can count on
        </h2>
        <div className="flex items-center justify-between w-full max-w-[1440px] px-[100px] flex-wrap max-md:px-0">
          <div className="flex flex-col border-l-[5px] border-black border-solid pl-[20px]">
            <p className="text-[48px] font-[600] leading-[57px] max-md:text-[26px]">
              57M
            </p>
            <p className="text-[28px] leading-[42px] font-[500] max-md:text-[26px]">
              Saved compared to AWS
            </p>
          </div>
          <div className="flex flex-col border-l-[5px] border-black border-solid pl-[20px]">
            <p className="text-[48px] font-[600] leading-[57px] max-md:text-[26px]">
              400M
            </p>
            <p className="text-[28px] leading-[42px] font-[500] max-md:text-[26px]">
              kWh of emission avoided
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
