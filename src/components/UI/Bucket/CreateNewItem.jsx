import { AverageButton } from "../Main/AverageButton";
import { client } from "../../../API/client";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useTheme } from "../../../features/theme/use-theme";

const closeBtn = (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.4999 11.1668L6.41659 15.2502C6.26381 15.4029 6.06936 15.4793 5.83325 15.4793C5.59714 15.4793 5.4027 15.4029 5.24992 15.2502C5.09714 15.0974 5.02075 14.9029 5.02075 14.6668C5.02075 14.4307 5.09714 14.2363 5.24992 14.0835L9.33325 10.0002L5.24992 5.91683C5.09714 5.76405 5.02075 5.56961 5.02075 5.3335C5.02075 5.09738 5.09714 4.90294 5.24992 4.75016C5.4027 4.59738 5.59714 4.521 5.83325 4.521C6.06936 4.521 6.26381 4.59738 6.41659 4.75016L10.4999 8.8335L14.5833 4.75016C14.736 4.59738 14.9305 4.521 15.1666 4.521C15.4027 4.521 15.5971 4.59738 15.7499 4.75016C15.9027 4.90294 15.9791 5.09738 15.9791 5.3335C15.9791 5.56961 15.9027 5.76405 15.7499 5.91683L11.6666 10.0002L15.7499 14.0835C15.9027 14.2363 15.9791 14.4307 15.9791 14.6668C15.9791 14.9029 15.9027 15.0974 15.7499 15.2502C15.5971 15.4029 15.4027 15.4793 15.1666 15.4793C14.9305 15.4793 14.736 15.4029 14.5833 15.2502L10.4999 11.1668Z"
      fill="#1D2433"
      fillOpacity="0.8"
    />
  </svg>
);

export const CreateNewItem = ({
  onClickOutside,
  onCancel,
  createBucketRef,
  isFolder,
  type,
  bucketId,
}) => {
  const { apikey } = useSelector((state) => state.verifyUser);
  const [theme] = useTheme();
  const createNewItem = (e, type) => {
    e.preventDefault();
    const newItemName = e?.target?.item?.value;
    if (newItemName?.length > 0 && type === "createFolder") {
      client("folders/create", {
        body: {
          name: newItemName,
          bucketId,
        },
        headers: { "x-api-key": apikey },
      }).then((res) => {
        console.log(res);
        onCancel();
      });
    }
    if (newItemName?.length > 0 && type === "createBucket") {
      client("bucket/create", {
        body: {
          name: newItemName,
        },
        headers: { "x-api-key": apikey },
      }).then((res) => {
        console.log(res);
        onCancel();
      });
    }
  };

  useEffect(() => {
    const sendRequest = (e) => {
      if (e.keyCode === 13) {
        createNewItem(e, type);
      }
    };
    window.addEventListener("keydown", sendRequest);
    return () => window.removeEventListener("keydown", sendRequest);
  }, []);

  const createNewItemWrapper = `w-full h-full overflow-hidden flex items-center 
  justify-center fixed top-0 left-0 z-10 bg-[#F4F4F4] bg-opacity-90 px-[30px] ${
    theme === "dark" ? "bg-[#1B1F27]" : ""
  }`;

  const createNewItemBoby = `flex flex-col w-full max-w-[721px] p-[25px] text-center bg-white rounded-[15px] ${
    theme === "dark" ? "bg-[black] text-white" : ""
  }`;

  const formWrapper = `flex flex-col pb-[40px] mb-[40px] border-b-[1px] border-solid border-[#EAEAEA] ${
    theme === "dark" ? "text-white" : ""
  }`;
  const input = `w-full p-[12px] border-[1px] border-solid border-[#EAEAEA] rounded-[10px] text-black ${
    theme === "dark" ? "text-white" : ""
  }`;
  const label = `text-[16px] leading-[16px] font-[600] text-black mb-[12px] ${
    theme === "dark" ? "text-white" : ""
  }`;
  const bodyTitle = `font-[600] text-[24px] leading-[28px] text-black ${
    theme === "dark" ? "text-white" : ""
  }`;
  const createNewItemHeader =
    "flex justify-between mb-30px items-center mb-[32px]";

  const cancleButtonProps = {
    title: "Cancel",
    textColor: "text-black",
    maxWidth: "max-w-[86px]",
    background: `bg-white`,
    paddingY: "py-[12px]",
    border: "border-black border-[1px] border-solid",
    fontSize: "text-[16px]",
    fontWeight: "font-[400]",
    borderRadius: "rounded-[10px]",
    height: "h-[40px]",
    style: { marginRight: "8px" },
  };

  const continueButtonProps = {
    title: "Continue",
    textColor: `${theme === "dark" ? "text-black" : "text-white"}`,
    maxWidth: "max-w-[102px]",
    background: `${theme === "dark" ? "bg-white" : "bg-black"}`,
    paddingY: "py-[10px]",
    border: "border-black",
    fontSize: "text-[16px]",
    fontWeight: "font-[400]",
    borderRadius: "rounded-[10px]",
    height: "h-[40px]",
  };

  return (
    <div className={createNewItemWrapper} onClick={onClickOutside}>
      <div className={createNewItemBoby} ref={createBucketRef}>
        <div className={createNewItemHeader}>
          <p className={bodyTitle}>
            {isFolder ? "Add New Folder" : "Create New Bucket"}
          </p>
          <button onClick={onCancel}>{closeBtn}</button>
        </div>
        <form onSubmit={(e) => createNewItem(e, type)} className="text-left">
          <div className={formWrapper}>
            <label className={label}>
              {isFolder ? "Folder Name" : "Bucket Name"}
            </label>
            <input
              type="text"
              name="item"
              placeholder="Enter New Name"
              className={input}
            ></input>
          </div>
          <div className="flex w-full justify-end">
            <AverageButton onClick={onCancel} {...cancleButtonProps} />
            <AverageButton {...continueButtonProps} />
          </div>
        </form>
      </div>
    </div>
  );
};
