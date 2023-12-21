export const Card = ({ imageSrc, title, subtitle }) => {
  const cardWrapper = `flex flex-col items-center pt-[32px] px-[24px] bg-[#0F0F21] pb-[26px] rounded-[25%] 
    text-center w-full max-w-[267px] h-auto max-h-[342px] mb-[22px] max-md:max-w-[230px] max-md:py-[20px]`;

  return (
    <div className={cardWrapper}>
      <div className="w-[96px] h-[96px] mb-[32px] max-md:mb-[22px]">
        <img src={imageSrc} alt={title}></img>
      </div>
      <p className="text-[24px] leading-[30px] mb-[16px] max-md:text-[20px] max-md:mb-[12px]">
        {title}
      </p>
      <p className="max-w-[203px]">{subtitle}</p>
    </div>
  );
};
