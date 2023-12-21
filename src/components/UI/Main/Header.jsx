import { ReactComponent as MistfileLogo } from "../../../assets/images/main/MistfileLogo.svg";
import { ReactComponent as Close } from "../../../assets/images/main/close.svg";
import burger from "../../../assets/images/main/burger.png";
import { Link } from "react-router-dom";
import { AverageButton } from "./AverageButton";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect, useState } from "react";
import { setUserAutorization } from "../../../features/getAutorization-slice";
import { useDispatch } from "react-redux";

const headerWrapper = `flex w-full h-[72px] bg-[#111111] p-[16px] rounded-[24px] 
justify-between items-center mt-[25px] mb-[100px] max-md:mb-[50px] max-md:justify-end max-sm:mb-[20px]`;
const linksWrapper =
  "flex w-full max-w-[400px] justify-between items-center max-md:max-w-none";
const linksWrapperPhone = "fixed top-0 left-0";

const linksWrapperPhoneVisible =
  "w-full h-full overflow-hidden flex flex-col items-center justify-center fixed top-0 left-0 backdrop-blur-[6px] z-10 text-black";

export const Header = ({
  changeVisibilitySign,
  moveToAnchor,
  featuresRef,
  testimonialRef,
}) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth || null);
  const [isShowMenu, setIsShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showSignPopup = (value, type) => {
    changeVisibilitySign(value, type);
  };

  const getStartedProps = {
    title: "Get Started",
    background: "bg-white",
    maxWidth: "max-w-[124px]",
    fontSize: "text-[15px]",
    paddingY: "py-[11px]",
    textColor: "text-black",
    fontWeight: "font-[800]",
    onClick: () => {
      setIsShowMenu(false);
      showSignPopup(true, "signUp");
    },
  };

  if (windowSize <= 600) {
    getStartedProps.background = "bg-black";
    getStartedProps.textColor = "text-white";
  }

  return (
    <>
      {windowSize > 600 && (
        <div className={headerWrapper}>
          <div className="flex items-center mr-[30px]">
            <MistfileLogo className="mr-[7px]" />
            <Link to="/">MISTFILE</Link>
          </div>
          <div className={linksWrapper}>
            <button onClick={() => moveToAnchor(featuresRef)}>Features</button>
            <button onClick={() => moveToAnchor(testimonialRef)}>
              Testimonial
            </button>
            <button onClick={() => showSignPopup(true, "signIn")}>
              Log In
            </button>
            <AverageButton
              {...getStartedProps}
              borderRadius={"rounded-[15px]"}
            />
          </div>
        </div>
      )}
      {windowSize <= 600 && (
        <div className={headerWrapper}>
          <button onClick={() => setIsShowMenu(!isShowMenu)}>
            <img src={burger}></img>
          </button>
          {isShowMenu && (
            <div
              className={
                isShowMenu ? linksWrapperPhoneVisible : linksWrapperPhone
              }
            >
              <div className="shadow-lg shadow-blue-500/50 h-[300px] flex flex-col bg-white w-1/2 justify-between items-center p-[20px] relative">
                <button
                  onClick={() => {
                    setIsShowMenu(false);
                    moveToAnchor(featuresRef);
                  }}
                  className="text-[24px]"
                >
                  Features
                </button>
                <button
                  onClick={() => {
                    setIsShowMenu(false);
                    moveToAnchor(testimonialRef);
                  }}
                  className="text-[24px]"
                >
                  Testimonial
                </button>
                <button
                  onClick={() => {
                    setIsShowMenu(false);
                    showSignPopup(true, "signIn");
                  }}
                  className="text-[24px]"
                >
                  Log In
                </button>
                <AverageButton
                  {...getStartedProps}
                  borderRadius={"rounded-[15px]"}
                />
                <button
                  onClick={() => setIsShowMenu(false)}
                  className="w-[30px] absolute right-3 top-3"
                >
                  <Close />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
