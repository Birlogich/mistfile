import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { CreateButton } from "../../UI/Bucket/CreateButton";
import { File } from "../../UI/Bucket/File";
import { BucketHeader } from "../BucketHeader/BucketHeader";
import { handleClickOutside } from "../../../customHooks/handleClickOutside";
import { UploadFile } from "../../UI/Bucket/UploadFile";
import { Spinner } from "../../UI/Spinner";
import { nanoid } from "@reduxjs/toolkit";
import { useGetListFolderFiles } from "../../../customHooks/useGetListFolderFiles";
import { useGetCurrentFolder } from "../../../customHooks/useGetCurrentFolder";
import { useTheme } from "../../../features/theme/use-theme";

const more = ">";

export const FolderInside = () => {
  const { folderId } = useParams();
  const [theme] = useTheme();
  const [showUploadFile, setShowUploadFile] = useState(false);
  const [filesInFolder, status] = useGetListFolderFiles(
    showUploadFile,
    folderId
  );
  const [currentFolder] = useGetCurrentFolder();

  const inputRef = useRef(null);
  const uploadImageRef = useRef(null);

  const navigate = useNavigate();

  const backButtonImg = (
    <svg
      width="32"
      height="31"
      viewBox="0 0 32 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.0669 8.70233C19.3114 8.93863 19.4336 9.23936 19.4336 9.60455C19.4336 9.96974 19.3114 10.2705 19.0669 10.5068L13.8669 15.5334L19.0669 20.5601C19.3114 20.7964 19.4336 21.0971 19.4336 21.4623C19.4336 21.8275 19.3114 22.1283 19.0669 22.3646C18.8225 22.6008 18.5114 22.719 18.1336 22.719C17.7558 22.719 17.4447 22.6008 17.2003 22.3646L11.0669 16.4357C10.9336 16.3068 10.8389 16.1671 10.7829 16.0168C10.7278 15.8664 10.7003 15.7053 10.7003 15.5334C10.7003 15.3616 10.7278 15.2005 10.7829 15.0501C10.8389 14.8997 10.9336 14.7601 11.0669 14.6312L17.2003 8.70233C17.4447 8.46603 17.7558 8.34788 18.1336 8.34788C18.5114 8.34788 18.8225 8.46603 19.0669 8.70233Z"
        fill={`${theme === "dark" ? "white" : "#1D2433"}`}
        fillOpacity="0.65"
      />
    </svg>
  );

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setShowUploadFile(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [showUploadFile]);

  return (
    <>
      <div
        className={`text-black w-full px-[40px] overflow-y-scroll flex items-center flex-col ${
          theme === "dark" ? "bg-[#1B1F27]" : ""
        }`}
      >
        <BucketHeader />
        <div className="flex w-full justify-between mb-[35px] items-start">
          <div className="flex items-center mr-[5px] w-[200px]">
            <div className="flex flex-col relative w-full">
              <div className="flex mb-[5px]">
                <button onClick={() => navigate(-1)}>{backButtonImg}</button>
                <h2
                  className={`text-poppins text-[24px] font-[600] ${
                    theme === "dark" ? "text-[#92929D]" : "text-black"
                  }`}
                >
                  Folders
                </h2>
              </div>
              <div className="flex absolute bottom-[-15px] left-0 items-center">
                <span
                  className={`mr-[5px] ${
                    theme === "dark" ? "text-[#92929D]" : "text-black"
                  }`}
                >
                  Folder
                </span>
                <span
                  className={`mr-[5px] ${
                    theme === "dark" ? "text-[#92929D]" : "text-[#6B6F7A]"
                  }`}
                >
                  {more}
                </span>
                <span
                  className={`${
                    theme === "dark" ? "text-[#92929D]" : "text-[#6B6F7A]"
                  }`}
                >
                  {currentFolder?.name}
                </span>
              </div>
            </div>
          </div>
          <CreateButton
            title={"Upload File"}
            isImage={"uploadImg"}
            onClick={() => setShowUploadFile(true)}
          />
        </div>
        {filesInFolder?.length > 1 &&
          status === "fulfilled" &&
          filesInFolder?.map((file) => {
            return (
              <div className="relative w-full" key={nanoid()}>
                <File {...file} />
              </div>
            );
          })}
        {filesInFolder?.length === 1 && status === "fulfilled" && (
          <div className="relative w-full">
            <File {...filesInFolder[0]} />
          </div>
        )}
        {status === "loading" && <Spinner />}
        {status !== "loading" && filesInFolder?.length < 1 && (
          <h2>Not Files added yet...</h2>
        )}
      </div>
      {showUploadFile && (
        <UploadFile
          onClick={() => setShowUploadFile(false)}
          inputRef={inputRef}
          typeOfRoot={"folder"}
          uploadImageRef={uploadImageRef}
          clickOutside={(e) =>
            handleClickOutside(e, uploadImageRef, setShowUploadFile)
          }
          folderId={folderId}
          setShowUploadFile={setShowUploadFile}
        />
      )}
    </>
  );
};
