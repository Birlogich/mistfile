import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { CreateButton } from "../../UI/Bucket/CreateButton";
import { CreateNewItem } from "../../UI/Bucket/CreateNewItem";
import { Folder } from "../../UI/Bucket/Folder";
import { handleClickOutside } from "../../../customHooks/handleClickOutside";
import { UploadFile } from "../../UI/Bucket/UploadFile";
import { Spinner } from "../../UI/Spinner";
import { nanoid } from "@reduxjs/toolkit";
import { BucketHeader } from "../BucketHeader/BucketHeader";
import { useGetBucketFiles } from "../../../customHooks/useGetBucketFiles";
import { useGetCurrentBucket } from "../../../customHooks/useGetCurrentBucket";
import { File } from "../../UI/Bucket/File";
import { useTheme } from "../../../features/theme/use-theme";

const more = ">";

export const BucketInside = () => {
  const { id } = useParams();
  const [currentBucket] = useGetCurrentBucket();
  const uploadImageRef = useRef(null);
  const inputRef = useRef(null);
  const [theme] = useTheme();
  const [showCreateBucket, setShowCreateBucket] = useState(false);
  const [showUploadFile, setShowUploadFile] = useState(false);
  const createBucketRef = useRef(null);
  const [countOfFiles, setCountOfFiles] = useState(0);
  const [status, folders, files] = useGetBucketFiles(
    showCreateBucket || showUploadFile
  );

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
        if (showCreateBucket) {
          setShowCreateBucket(false);
        } else if (showUploadFile) {
          setShowUploadFile(false);
        } else {
          return;
        }
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [showCreateBucket, showUploadFile]);

  const getCountOfFiles = (count) => {
    setCountOfFiles(count);
  };

  return (
    <>
      <div
        className={`text-black w-full px-[40px] overflow-y-scroll flex items-center flex-col ${
          theme === "dark" ? "bg-[#1B1F27]" : " bg-white"
        }`}
      >
        <BucketHeader />
        <div className="flex w-full justify-between mb-[35px] max-sm:flex-col">
          <div className="flex items-center mr-[5px]">
            <div className="flex flex-col relative max-sm:mb-[30px]">
              <div className="flex mb-[5px]">
                <button onClick={() => navigate(-1)}>{backButtonImg}</button>
                <h2
                  className={`text-poppins text-[24px] font-[600] ${
                    theme === "dark" ? "text-[#92929D]" : "text-black"
                  }`}
                >
                  Buckets
                </h2>
              </div>
              <div className="flex absolute bottom-[-15px] left-0 items-center">
                <span
                  className={`mr-[5px] ${
                    theme === "dark" ? "text-[#92929D]" : "text-black"
                  }`}
                >
                  Bucket
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
                  {currentBucket?.name}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between max-w-[320px] w-full max-sm:flex-col">
            <CreateButton
              onClick={() => setShowCreateBucket(true)}
              title={"Create Folder"}
              whiteButton={true}
            />
            <CreateButton
              title={"Upload File"}
              isImage={"uploadImg"}
              onClick={() => setShowUploadFile(true)}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full items-center">
          {folders?.length > 1 &&
            status === "fulfilled" &&
            folders?.map((file) => {
              return (
                <Folder
                  {...file}
                  key={nanoid()}
                  getCountOfFiles={getCountOfFiles}
                />
              );
            })}
          {folders?.length === 1 && status === "fulfilled" && (
            <Folder {...folders[0]} getCountOfFiles={getCountOfFiles} />
          )}
          {status === "loading" && (
            <div className="w-full items-center justify-center">
              <Spinner />
            </div>
          )}
          {folders?.length < 1 && files?.length < 1 && status !== "loading" && (
            <div className="w-full items-center justify-center">
              <h2 className="text-center">Not Files or Folders added yet...</h2>
            </div>
          )}
        </div>
        <div className="flex flex-wrap w-full items-center">
          {files?.length > 1 &&
            status === "fulfilled" &&
            files?.map((file) => {
              return <File {...file} key={nanoid()} />;
            })}
          {files?.length === 1 && status === "fulfilled" && (
            <File {...files[0]} />
          )}
        </div>
      </div>
      {showCreateBucket && (
        <CreateNewItem
          type="createFolder"
          bucketId={id}
          createBucketRef={createBucketRef}
          onClick={(e) =>
            handleClickOutside(e, createBucketRef, setShowCreateBucket)
          }
          onCancel={() => setShowCreateBucket(false)}
          isFolder={true}
        />
      )}
      {showUploadFile && (
        <UploadFile
          onClick={() => setShowUploadFile(false)}
          inputRef={inputRef}
          folderId={id}
          typeOfRoot={"bucket"}
          uploadImageRef={uploadImageRef}
          clickOutside={(e) =>
            handleClickOutside(e, uploadImageRef, setShowUploadFile)
          }
          setShowUploadFile={setShowUploadFile}
        />
      )}
    </>
  );
};
