import successImage from "../../../assets/images/SuccessFailedPage/successImage.png";
import failedImage from "../../../assets/images/SuccessFailedPage/failedImage.png";
import { AverageButton } from "../Main/AverageButton";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setUserAutorization } from "../../../features/getAutorization-slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const closeBtn = (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="36" height="36" rx="18" fill="#EFEFEF" />
    <path
      d="M13.5891 12.4108C13.2637 12.0854 12.736 12.0854 12.4106 12.4108C12.0851 12.7363 12.0851 13.2639 12.4106 13.5893L16.8213 18.0001L12.4106 22.4108C12.0852 22.7363 12.0852 23.2639 12.4106 23.5893C12.736 23.9148 13.2637 23.9148 13.5891 23.5893L17.9998 19.1786L22.4106 23.5893C22.736 23.9148 23.2637 23.9148 23.5891 23.5893C23.9145 23.2639 23.9145 22.7363 23.5891 22.4108L19.1784 18.0001L23.5891 13.5893C23.9146 13.2639 23.9146 12.7363 23.5891 12.4108C23.2637 12.0854 22.736 12.0854 22.4106 12.4108L17.9998 16.8216L13.5891 12.4108Z"
      fill="#33383F"
    />
  </svg>
);

export const ResultPayment = () => {
  const { success } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (success === "succeeded") {
      dispatch(setUserAutorization(true));
      setTimeout(() => navigate("/"), 3000);
    } else {
      navigate("../checkout");
    }
  }, []);

  const closePopup = () => {
    if (success === "succeeded") {
      dispatch(setUserAutorization(true));
      navigate("/");
    } else {
      navigate("../checkout");
    }
  };

  return (
    <div className="flex items-center w-full h-full justify-center bg-[#F9F9F9] fixed top-0 left-0">
      <div className="flex items-center justify-center bg-white max-w-[560px] flex-col w-full px-[24px] pt-[84px] pb-[104px] rounded-[15px] relative text-center">
        <button
          className="absolute top-[24px] right-[24px] mb-[20px]"
          onClick={closePopup}
        >
          {closeBtn}
        </button>
        <div className="mb-[20px]">
          <img
            src={success === "succeeded" ? successImage : failedImage}
            alt={success === "succeeded" ? "successImage" : "falseImage"}
          ></img>
        </div>
        <p className="font-[600] text-[20px] leading-[32px] text-black mb-[16px]">
          {success === "succeeded" ? "Success!" : "Paiment Failed"}
        </p>
        <p className="font-[500] text-[16px] leading-[24px] text-[#6F767E] mb-[20px]">
          {success === "succeeded"
            ? "Your card has been authorized and will be charged till you cancel."
            : "Seems like there was some trouble billing your card. Please try again later or with another card."}
        </p>
        <AverageButton
          background={"bg-black"}
          title={success === "succeeded" ? "Done!" : "Try Again"}
          paddingY={"py-[12px]"}
          borderRadius={"rounded-[15px]"}
          maxWidth={"max-w-[160px]"}
          fontWeight={"font-[700]"}
          fontSize={"text-[16px]"}
          textColor={"text-white"}
          onClick={closePopup}
        />
      </div>
    </div>
  );
};
