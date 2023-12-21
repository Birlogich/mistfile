import fileIcon from "../../../assets/images/bucket/icons/fileIcon.png";
import uploadedFileIcon from "../../../assets/images/bucket/icons/uploadedFileIcon.png";
import cancelUploadFile from "../../../assets/images/bucket/icons/cancelUploadFile.png";
import { useEffect, useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export const UploadedFile = ({ fileName, status, fileSize }) => {
  const [size, setSize] = useState("");

  useEffect(() => {
    const arrFromString = fileSize?.toString().slice(0, 3).split("");
    if (arrFromString) {
      const sizeOfFile =
        arrFromString[0] + "." + arrFromString?.slice(1).join("");
      setSize(sizeOfFile);
    }
  }, []);

  return (
    <div className="flex flex-col mb-[32px]">
      <div className="flex justify-between text-poppins mb-[16px] items-center">
        <img src={fileIcon} alt="fileIcon"></img>
        <p className="font-[500] text-[16px] leading-[24px]">{fileName}</p>
        <p className="font-[400] text-[16px] leading-[24px]">{size} Mb</p>

        {/*         {status === "fulfilled" && (
          <button>
            <img src={uploadedFileIcon} alt="uploadedFileIcon"></img>
          </button>
        )}
        {status === "rejected" && (
          <button>
            <img src={cancelUploadFile} alt="cancelUploadFile"></img>
          </button>
        )} */}
      </div>
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
      {/*       <div className="bg-[#3BC963] h-[6px] w-full rounded-md"></div> */}
    </div>
  );
};
