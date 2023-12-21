import { Link } from "react-router-dom";
import { Menu } from "./Menu";
import { ShareBucket } from "../../UI/Bucket/ShareBucket";
import { handleClickOutside } from "../../../customHooks/handleClickOutside";
import folderIcon from "../../../assets/images/bucket/icons/folderIcon.png";
import { useEffect, useRef, useState } from "react";
import { useGetListFolderFiles } from "../../../customHooks/useGetListFolderFiles";
import { useTheme } from "../../../features/theme/use-theme";

const detailsImg = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_4582)">
      <path
        d="M11.5 12C11.5 12.2652 11.6054 12.5196 11.7929 12.7071C11.9804 12.8946 12.2348 13 12.5 13C12.7652 13 13.0196 12.8946 13.2071 12.7071C13.3946 12.5196 13.5 12.2652 13.5 12C13.5 11.7348 13.3946 11.4804 13.2071 11.2929C13.0196 11.1054 12.7652 11 12.5 11C12.2348 11 11.9804 11.1054 11.7929 11.2929C11.6054 11.4804 11.5 11.7348 11.5 12Z"
        stroke="#2C3E50"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 19C11.5 19.2652 11.6054 19.5196 11.7929 19.7071C11.9804 19.8946 12.2348 20 12.5 20C12.7652 20 13.0196 19.8946 13.2071 19.7071C13.3946 19.5196 13.5 19.2652 13.5 19C13.5 18.7348 13.3946 18.4804 13.2071 18.2929C13.0196 18.1054 12.7652 18 12.5 18C12.2348 18 11.9804 18.1054 11.7929 18.2929C11.6054 18.4804 11.5 18.7348 11.5 19Z"
        stroke="#2C3E50"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 5C11.5 5.26522 11.6054 5.51957 11.7929 5.70711C11.9804 5.89464 12.2348 6 12.5 6C12.7652 6 13.0196 5.89464 13.2071 5.70711C13.3946 5.51957 13.5 5.26522 13.5 5C13.5 4.73478 13.3946 4.48043 13.2071 4.29289C13.0196 4.10536 12.7652 4 12.5 4C12.2348 4 11.9804 4.10536 11.7929 4.29289C11.6054 4.48043 11.5 4.73478 11.5 5Z"
        stroke="#2C3E50"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_4582">
        <rect width="24" height="24" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

export const Folder = ({ name, _id, getCountOfFiles }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme] = useTheme();
  const [filesInFolder] = useGetListFolderFiles(null, _id);
  const [showShare, setShowShare] = useState(false);
  const shareBucketRef = useRef(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth || null);

  useEffect(() => {
    getCountOfFiles(filesInFolder.length);
  }, []);

  const url = window.location.href;

  const showMenuHandler = () => {
    setTimeout(() => setShowMenu(false), 0);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`flex flex-col p-[20px] w-full ${
        windowSize <= 540 ? "" : "max-w-[200px]  mr-[32px]"
      } rounded-[20px] mb-[32px] relative
      ${
        theme === "dark"
          ? "bg-[#272B30]"
          : "bg-white border-[1px] border-solid border-[#EAEAEA]"
      }
      `}
    >
      <div className="mb-[10px] flex justify-between">
        <img src={folderIcon}></img>
        <button onClick={() => setShowMenu(!showMenu)}>{detailsImg}</button>
      </div>
      <div className="flex justify-between mb-[15px]">
        <Link
          to={`folder/${_id}`}
          className={`text-gilroy text-[20px] leading-[26px] font-[600] `}
        >
          <span
            className={`${theme === "dark" ? "text-[#92929D]" : "text-black"}`}
          >
            {name?.length > 13 ? name?.slice(0, 13) + "..." : name}
          </span>
        </Link>
      </div>
      <div className="flex w-full">
        <span className="font-[400] text-[14px] leading-[16px] text-[#92929D]">
          {`${filesInFolder.length} files`}
        </span>
      </div>
      {showMenu && (
        <Menu
          handleShare={() => setShowShare(true)}
          showMenuHandler={showMenuHandler}
          fileID={_id}
        />
      )}
      {showShare && (
        <ShareBucket
          url={`${url}/folder/${_id}`}
          onCancel={() => setShowShare(false)}
          shareBucketRef={shareBucketRef}
          onClick={(e) => handleClickOutside(e, shareBucketRef, setShowShare)}
        />
      )}
    </div>
  );
};
