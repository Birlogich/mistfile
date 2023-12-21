import quoteImg from "../../../assets/images/main/quoteImg.svg";

export const TestimonialCard = ({ quote, position }) => {
  return (
    <div className="flex flex-col w-full bg-white rounded-[60px] p-[24px] pt-[72px] max-w-[558px] animate-fade-left mx-[22px] max-md:p-[20px] max-md:pt-[50px]">
      <p className="font-[400] text-[24px] leading-[34px] mb-[76px] text-[#000000] flex-auto max-md:text-[18px] max-md:mb-[20px]">
        {quote}
      </p>
      <div className="flex items-center justify-between bg-[#F9F9F9] py-[39px] rounded-[60px] border-[1px] border-solid border-[#DCDCDC] px-[36px] max-md:hidden">
        <p className="text-[24px] leading-[18px] font-[400] text-[#888888] max-md:text-[15px]">
          {position}
        </p>
        <img
          src={quoteImg}
          className="top-[50%] right-0 max-md:hidden"
          alt="quote"
        ></img>
      </div>
    </div>
  );
};
