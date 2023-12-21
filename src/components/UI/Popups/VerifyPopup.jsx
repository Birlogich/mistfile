import { AverageButton } from "../Main/AverageButton";

export const VerifyPopup = ({
  refVefifySignUp,
  clickOutside,
  closeClick,
  /*   type, */
}) => {
  const buttonPropsStyle = {
    title: "Done",
    textColor: "text-black",
    fontWeight: "font-bold",
    paddingY: "py-[12px]",
    fontSize: "text-[16px]",
    background: "bg-transparent",
    border: "border-[1px] border-solid border-[#E9ECF3]",
    onClick: closeClick,
  };

  return (
    <div
      className="w-full h-full overflow-hidden flex items-center justify-center fixed top-0 left-0 backdrop-blur-[6px] z-10 "
      onClick={clickOutside}
    >
      <div
        className="flex flex-col w-full max-w-[556px] p-[40px] text-center bg-white shadow-popupShadow rounded-[15px] max-md:mx-[20px]"
        ref={refVefifySignUp}
      >
        <p className="font-[700] text-[32px] leading-[32px] mb-[40px] text-black">
          {/*           {type === "signIn" && "Verify Sign In"}
          {type === "signUp" && "Verify Sign Up"} */}
          Verify Login
        </p>
        <p className="text-black font-[400] text-[14px] leading-[19px] mb-[40px]">
          A login link was sent to you. You can check your email and click on
          the link or button. Check spam or trash as some providers may have
          placed it there.
        </p>
        <AverageButton {...buttonPropsStyle} />
      </div>
    </div>
  );
};
