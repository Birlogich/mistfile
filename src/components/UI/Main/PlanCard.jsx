import { Link } from "react-router-dom";
import { ReactComponent as ButtonIcon } from "../../../assets/images/planCard/ButtonIcon.svg";
import { ReactComponent as CheckIcon } from "../../../assets/images/planCard/CheckIcon.svg";

export const PlanCard = (card, isBilling) => {
  const {
    developer,
    address,
    image,
    title,
    forWhom,
    price,
    features: { maxSize, limitStorage, limitFiles, limitDevices, people },
  } = card;

  return (
    <div
      className={`${
        isBilling
          ? "bg-[#FCFCFC] border-[1px] border-solid border-[#E6E6E6]"
          : "bg-white"
      } flex flex-col w-full pb-[26px] pt-[27px] pr-[46px] pl-[32px] max-w-[364px] mb-[32px] rounded-[20px] mx-[10px] max-md:px-[20px] `}
    >
      <div className="w-full flex justify-between items-center mb-[25px]">
        <div className="flex">
          <img src={image} alt={`imagefor-${title}`}></img>
          <span className="text-[24px] leading-[30px] font-[600] ml-[8px]">
            {title}
          </span>
        </div>
        {!developer ? (
          ""
        ) : (
          <p className="flex items-center text-[12px] leading-[14px] font-[600] py-[4px] bg-[#F9F9F9] border-solid border-[1px] border-[#E9E9E9] rounded-[15px] text-[#23232D] px-[12px]  max-md:hidden">
            {forWhom}
          </p>
        )}
      </div>
      <div className="w-full flex justify-start flex-col mb-[25px]">
        <div className="flex items-end mb-[8px]">
          <p
            className="text-[56px] text-black font-[600] leading-[69px]"
            style={{ textWrap: "nowrap" }}
          >
            {price}
          </p>
          <span className="text-[16px] leading-[20px] font-[400] text-[#787878] mb-[10px]">
            {!developer ? "/month" : "/per TB"}
          </span>
        </div>
        <p className="text-[16px] leading-[20px] font-[400] text-[#787878]">
          billed monthly
        </p>
      </div>
      <div className="flex w-full bg-black rounded-[15px] pl-[20px] py-[14px] items-center justify-between pr-[6px] mb-[24px]">
        <Link
          to={`/${address}/checkout`}
          className="text-[16px] leading-[20px] font-[600]"
        >
          <span className="text-white">Get Started</span>
        </Link>
        <ButtonIcon />
      </div>
      <p className="font-[400] text-[14px] mb-[25px] text-black">
        Features Included:
      </p>
      <ul className="flex flex-col items-start text-[#585858]">
        <li className="flex items-center mb-[16px]">
          <CheckIcon className="mr-[16px]" />
          <span className="font-[400] text-[16px]">{maxSize}</span>
        </li>
        <li className="flex items-center mb-[16px]">
          <CheckIcon className="mr-[16px]" />
          <span className="font-[400] text-[16px]">{limitStorage}</span>
        </li>
        <li className="flex items-center mb-[16px]">
          <CheckIcon className="mr-[16px]" />
          <span className="font-[400] text-[16px]">{limitFiles}</span>
        </li>
        <li className="flex items-center mb-[16px]">
          <CheckIcon className="mr-[16px]" />
          <span className="font-[400] text-[16px]">{limitDevices}</span>
        </li>
        <li className="flex items-center">
          <CheckIcon className="mr-[16px]" />
          <span className="font-[400] text-[16px]">{people}</span>
        </li>
      </ul>
    </div>
  );
};
