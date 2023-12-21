import { client } from "../../../API/client";
import { useEffect, useState } from "react";
import { useCacheUpload } from "../../../customHooks/useCacheUpload";
import uploadFilePopupImg from "../../../assets/images/bucket/icons/uploadFilePopupImg.png";
import { UploadedFile } from "./UploadedFile";
import { useSelector } from "react-redux";

const uploadFileBody = `w-full h-full overflow-hidden flex items-end 
  justify-end fixed top-0 left-0 bg-[rgba(244,244,244,0.8)] z-10 max-sm:px-[20px] max-sm:items-center`;

const closeBtn = (
  <svg
    width="28"
    height="29"
    viewBox="0 0 28 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.9998 16.1334L8.28315 21.8501C8.06926 22.0639 7.79703 22.1709 7.46648 22.1709C7.13592 22.1709 6.8637 22.0639 6.64981 21.8501C6.43592 21.6362 6.32898 21.3639 6.32898 21.0334C6.32898 20.7028 6.43592 20.4306 6.64981 20.2167L12.3665 14.5001L6.64981 8.78339C6.43592 8.5695 6.32898 8.29728 6.32898 7.96672C6.32898 7.63617 6.43592 7.36395 6.64981 7.15006C6.8637 6.93617 7.13592 6.82922 7.46648 6.82922C7.79703 6.82922 8.06926 6.93617 8.28315 7.15006L13.9998 12.8667L19.7165 7.15006C19.9304 6.93617 20.2026 6.82922 20.5331 6.82922C20.8637 6.82922 21.1359 6.93617 21.3498 7.15006C21.5637 7.36395 21.6706 7.63617 21.6706 7.96672C21.6706 8.29728 21.5637 8.5695 21.3498 8.78339L15.6331 14.5001L21.3498 20.2167C21.5637 20.4306 21.6706 20.7028 21.6706 21.0334C21.6706 21.3639 21.5637 21.6362 21.3498 21.8501C21.1359 22.0639 20.8637 22.1709 20.5331 22.1709C20.2026 22.1709 19.9304 22.0639 19.7165 21.8501L13.9998 16.1334Z"
      fill="#1D2433"
      fillOpacity="0.8"
    />
  </svg>
);

export const UploadFile = ({
  onClick,
  inputRef,
  folderId,
  setShowUploadFile,
  clickOutside,
  uploadImageRef,
  typeOfRoot,
}) => {
  const [uploadFile] = useCacheUpload();
  const [status, setStatus] = useState("idle");
  const [file, setFile] = useState(null);
  const [binaryName, setBinaryName] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const { apikey } = useSelector((state) => state.verifyUser);
  const [fileInfo, setFileInfo] = useState([]);

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const droppedFile = e?.dataTransfer?.files[0];
    console.log(droppedFile);
    if (droppedFile) {
      let file_size = droppedFile.size;
      setStatus("loading");
      client(`files/upload`, {
        body: {
          rawfilename: e.dataTransfer?.files[0]?.name,
          contentType: droppedFile.type,
          ...(typeOfRoot === "folder"
            ? { folderId: folderId }
            : { bucketId: folderId }),
        },
        headers: { "x-api-key": apikey },
      }).then((res) => {
        console.log(res);
        setFileInfo([
          ...fileInfo,
          { fileName: res?.filename, url: res?.url, fileSize: file_size },
        ]);
      });
    }
  };

  const handleChange = function (e) {
    e.preventDefault();
    const data = new FormData();
    const droppedFile = e?.target?.files[0];
    setFile(droppedFile);
    data.append("file", droppedFile);
    console.log(droppedFile);
    if (e?.target?.files && droppedFile) {
      let file_size = droppedFile.size;
      setStatus("loading");
      client(`files/upload`, {
        body: {
          rawfilename: data.get("file").name,
          contentType: droppedFile.type,
          ...(typeOfRoot === "folder"
            ? { folderId: folderId }
            : { bucketId: folderId }),
        },
        headers: { "x-api-key": apikey },
      }).then((res) => {
        setFileInfo([
          ...fileInfo,
          { fileName: res?.filename, url: res?.url, fileSize: file_size },
        ]);
      });
    }
  };

  useEffect(() => {
    if (fileInfo[0]) {
      const url = fileInfo[0]?.url;
      setStatus("loading");
      uploadFile(url, file)
        .then((res) => {
          console.log(res);
          setStatus("fulfilled");
          setShowUploadFile(false);
        })
        .catch((error) => {
          console.error("Error in uploadFile:", error);
          setStatus("rejected");
        });
    }
  }, [fileInfo]);

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className={uploadFileBody} onClick={clickOutside}>
      <div
        className="flex flex-col w-full max-w-[632px] bg-white text-black p-[25px] shadow-[-40px_-42px_82px_0px_#00000012]"
        ref={uploadImageRef}
      >
        <div className="flex justify-between mb-[24px]">
          <p className="text-gilroy text-[24px] leading-[28px]">Upload Files</p>
          <button onClick={onClick}>{closeBtn}</button>
        </div>
        <form
          onDragEnter={handleDrag}
          className="flex flex-col w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex items-center justify-center w-full h-[150px] relative border-dashed border-[1px] border-[#AFB8CA] mb-[25px]">
            <input
              type="file"
              multiple={true}
              ref={inputRef}
              onChange={handleChange}
              className="flex items-center justify-center hidden"
            ></input>
            <label className="flex flex-col items-center justify-center w-full h-full">
              <img
                src={uploadFilePopupImg}
                alt="upload"
                className="w-[32px] mb-[16px]"
              ></img>
              <button onClick={onButtonClick}>
                Drag-and-drop file, or browse computer
              </button>
            </label>
            {dragActive && (
              <div
                className="absolute w-full h-full top-0 left-0 right-0 bottom-0"
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              ></div>
            )}
          </div>
          <div className="flex flex-col">
            {fileInfo.length < 1 && <p className="text-center">Add the File</p>}
            {fileInfo.length === 1 && <UploadedFile {...fileInfo[0]} />}
            {fileInfo.length > 1 && fileInfo?.name && (
              <>
                {fileInfo.map((file) => {
                  return <UploadedFile {...file} status={status} />;
                })}
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
