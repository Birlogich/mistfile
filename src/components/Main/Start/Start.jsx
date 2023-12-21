import { Header } from "../../UI/Main/Header";
import imageAccent from "../../../assets/images/main/imageAccent.png";
import { AverageButton } from "../../UI/Main/AverageButton";
import { useChangeVisibility } from "../../../customHooks/useChangeVisibility";
import { SignPopup } from "../../UI/Popups/SignPopup";
import { VerifyPopup } from "../../UI/Popups/VerifyPopup";
import { handleClickOutside } from "../../../customHooks/handleClickOutside";

const getStartedButtonProps = {
  title: "Get Started",
  background: "bg-[#111111]",
  maxWidth: "max-w-[179px]",
  fontSize: "text-[18px]",
  paddingY: "py-[16px]",
  textColor: "text-white",
  fontWeight: "font-[500]",
  borderRadius: "rounded-[15px]",
};

export const Start = ({ moveToAnchor, testimonialRef, featuresRef }) => {
  const [
    refSignUp,
    refSignIn,
    refVefifySignUp,
    showVerifySignPopup,
    setshowVerifySignPopup,
    changeVisibilitySign,
    setshowSignPopup,
    showSignPopup,
  ] = useChangeVisibility();

  return (
    <div className="flex items-center flex-col bg-noise mb-[132px] max-md:mb-[50px]">
      <div className="flex flex-col w-full h-full max-w-[1440px] px-[100px] items-center max-md:px-[50px] max-sm:px-[20px]">
        <Header
          changeVisibilitySign={changeVisibilitySign}
          moveToAnchor={moveToAnchor}
          featuresRef={featuresRef}
          testimonialRef={testimonialRef}
        />
        <div className="flex justify-between w-full text-black">
          <div className="flex flex-col items-start w-full max-w-[579px]">
            <h1 className="text-[72px] leading-[72px] mb-[40px] font-[800] max-md:text-[40px] max-md:mb-[20px]">
              Store whatever you want, when you want
            </h1>
            <p className="text-[18px] leading-[25px] mb-[40px]">
              Simple file sharing, object storage, at a fair price. Stop
              overpaying with gigantic companies. Securely store whatever you
              can dream and create.
            </p>
            <AverageButton {...getStartedButtonProps} />
          </div>
          <div className="flex flex-col items-start w-full max-w-[579px] max-md:hidden">
            <img
              src={imageAccent}
              alt="imageAccent"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
      {showSignPopup.signUp === true && (
        <SignPopup
          type={"signUp"}
          refSignUp={refSignUp}
          setshowSignPopup={setshowSignPopup}
          setshowVerifySignPopup={setshowVerifySignPopup}
          clickOutside={(e) =>
            handleClickOutside(
              e,
              refSignUp,
              setshowSignPopup,
              "signUp",
              showSignPopup
            )
          }
          cancelClick={() =>
            setshowSignPopup({ ...showSignPopup, signUp: false })
          }
        />
      )}
      {showSignPopup.signIn === true && (
        <SignPopup
          type={"signIn"}
          setshowVerifySignPopup={setshowVerifySignPopup}
          setshowSignPopup={setshowSignPopup}
          refSignIn={refSignIn}
          clickOutside={(e) =>
            handleClickOutside(
              e,
              refSignIn,
              setshowSignPopup,
              "signIn",
              showSignPopup
            )
          }
          cancelClick={() =>
            setshowSignPopup({ ...showSignPopup, signUpPopup: false })
          }
        />
      )}
      {showVerifySignPopup === true && (
        <VerifyPopup
          refVefifySignUp={refVefifySignUp}
          clickOutside={(e) =>
            handleClickOutside(e, refVefifySignUp, setshowVerifySignPopup)
          }
          closeClick={() =>
            setshowVerifySignPopup({
              ...showVerifySignPopup,
              signInPopup: false,
            })
          }
        />
      )}
    </div>
  );
};
