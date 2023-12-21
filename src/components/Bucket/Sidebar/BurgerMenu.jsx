import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavigateButton } from "../../UI/Bucket/NavigateButton";
import { handleClickOutside } from "../../../customHooks/handleClickOutside";
import { ReactComponent as Close } from "../../../assets/images/main/close.svg";

const linksWrapperPhone = "fixed top-0 left-0";
const linksWrapperPhoneVisible =
  "w-full h-full overflow-hidden flex flex-col items-center justify-center fixed top-0 left-0 backdrop-blur-[6px] z-10 text-black";

export const BurgerMenu = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth || null);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const refPopupMenu = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <button onClick={() => setIsShowMenu(!isShowMenu)}>
        <GiHamburgerMenu className="w-[45px] p-[10px] bg-white h-[45px]" />
      </button>
      {windowSize <= 600 && isShowMenu && (
        <div
          className={isShowMenu ? linksWrapperPhoneVisible : linksWrapperPhone}
          onClick={(e) => handleClickOutside(e, refPopupMenu, setIsShowMenu)}
        >
          <div
            className="shadow-lg shadow-blue-500/50 h-auto flex flex-col bg-white w-1/2 justify-between items-center p-[20px] relative w-[220px]"
            ref={refPopupMenu}
          >
            <NavigateButton title="Buckets" to="/" fontSize={"text-[20px]"} />
            <NavigateButton
              title="Refer"
              to="/partner"
              fontSize={"text-[20px]"}
            />
            <NavigateButton
              title="Setting"
              to="/setting"
              fontSize={"text-[20px]"}
            />
            <NavigateButton
              title="Billing"
              to="/billing"
              fontSize={"text-[20px]"}
            />
            <NavigateButton title="Help" to="/help" fontSize={"text-[20px]"} />
            <button
              onClick={() => setIsShowMenu(false)}
              className="w-[30px] absolute right-3 top-3"
            >
              <Close />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
