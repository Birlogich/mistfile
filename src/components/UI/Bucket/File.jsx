import { useEffect, useState, useRef } from "react";
import actionIconFolder from "../../../assets/images/bucket/icons/actionIconFolder.png";
import folderIcon from "../../../assets/images/bucket/icons/folderIcon.png";
import { handleClickOutside } from "../../../customHooks/handleClickOutside";
import { ShareBucket } from "../../UI/Bucket/ShareBucket";
import { BsThreeDots } from "react-icons/bs";
import { Menu } from "./Menu";
import { useTheme } from "../../../features/theme/use-theme";

export const File = ({ createdAt, rawfilename, filename, url }) => {
  const [theme] = useTheme();
  const [windowSize, setWindowSize] = useState(window.innerWidth || null);
  const [showMenu, setShowMenu] = useState(false);
  const shareBucketRef = useRef(null);
  const [showShare, setShowShare] = useState(false);

  const fileName = rawfilename?.split(".")[0];

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showMenuHandler = () => {
    setTimeout(() => setShowMenu(false), 0);
  };

  return (
    <div
      className={`flex w-full items-center justify-between py-[28px] px-[13px] rounded-[15px] text-[16px] mb-[30px] relative ${
        theme === "dark" ? "bg-[#272B30]" : "bg-[#F6F9FF]"
      }`}
    >
      <div
        className={`flex items-center w-full max-w-[225px] ${
          windowSize < 900 ? "flex-auto" : ""
        }`}
      >
        <img src={folderIcon} className="mr-[24px]" alt="folderIcon"></img>
        {windowSize >= 900 && (
          <p
            className={`text-poppins w-full font-[500] leading-[24px] mr-[20px] ${
              theme === "dark" ? "text-[#77797D]" : ""
            }`}
          >
            {fileName.length > 15 ? fileName?.slice(0, 15) + "..." : fileName}
          </p>
        )}
        {windowSize < 900 && (
          <p
            className={`text-poppins font-[500] leading-[24px] mr-[20px] ${
              theme === "dark" ? "text-[#77797D]" : ""
            }`}
          >
            {fileName.length > 10 ? fileName?.slice(0, 10) + "..." : fileName}
          </p>
        )}
      </div>
      {windowSize >= 900 && (
        <div className="flex flex-auto justify-between max-w-[350px] text-[#92929D] font-[400]">
          <p className="mx-[10px]">{"." + rawfilename?.split(".")[1]}</p>
          <p>{new Date(createdAt).toLocaleString()}</p>
          <p>{} mb</p>
        </div>
      )}
      {windowSize < 900 && (
        <div className="flex justify-between max-w-[350px] text-[#92929D] font-[400]">
          <p>{"." + rawfilename?.split(".")[1]}</p>
        </div>
      )}
      <button onClick={() => setShowMenu(!showMenu)} className="ml-[20px]">
        {theme !== "dark" ? (
          <img src={actionIconFolder} alt="actionIconFolder" />
        ) : (
          <BsThreeDots className="w-[44px] h-[44px] p-[8px] text-[#92929D]" />
        )}
      </button>
      {showMenu && (
        <Menu
          filename={filename}
          showMenuHandler={showMenuHandler}
          handleShare={() => setShowShare(true)}
        />
      )}
      {showShare && (
        <ShareBucket
          onCancel={() => setShowShare(false)}
          shareBucketRef={shareBucketRef}
          url={url}
          onClick={(e) => handleClickOutside(e, shareBucketRef, setShowShare)}
        />
      )}
    </div>
  );
};
