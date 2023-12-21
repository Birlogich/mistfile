import { useRef, useState } from "react";
import { BucketHeader } from "../BucketHeader/BucketHeader";
import { CreateButton } from "../../UI/Bucket/CreateButton";
import { CreateNewItem } from "../../UI/Bucket/CreateNewItem";
import { BucketFolder } from "../../UI/Bucket/BucketFolder";
import { handleClickOutside } from "../../../customHooks/handleClickOutside";
import { Spinner } from "../../UI/Spinner";
import { nanoid } from "@reduxjs/toolkit";
import { useGetBucket } from "../../../customHooks/useGetBucket";
import { useTheme } from "../../../features/theme/use-theme";

export const BucketBlank = () => {
  const [theme] = useTheme();
  const createBucketRef = useRef(null);
  const [showCreateBucket, setShowCreateBucket] = useState(false);
  const [buckets, status] = useGetBucket(showCreateBucket);

  return (
    <>
      <div
        className={`text-black w-full px-[40px] overflow-y-scroll flex items-center flex-col relative ${
          theme === "dark" ? "bg-[#1B1F27] text-white" : ""
        }`}
      >
        <BucketHeader />
        <div className="flex w-full justify-between mb-[176px] max-sm:flex-col max-md:mb-[50px]">
          <h2
            className={`text-poppins text-[24px] font-[600] max-sm:mb-[20px] ${
              theme === "dark" ? "text-[#92929D]" : "text-black"
            }`}
          >
            Buckets
          </h2>
          <CreateButton
            onClick={() => setShowCreateBucket(true)}
            title={"Create New Bucket"}
          />
        </div>
        {buckets?.length < 1 && status !== "loading" && (
          <div className="flex flex-col justify-center items-center">
            <img
              src={require("../../../assets/images/bucket/IconNodata.png")}
              className="max-w-[252px] mb-[16px]"
              alt="noDataFound"
            ></img>
            <p className="text-[16px] font-[500] text-gilroy mb-[16px]">
              No data found. Please add a new bucket
            </p>
            <CreateButton
              onClick={() => setShowCreateBucket(true)}
              title={"Create New Bucket"}
            />
          </div>
        )}
        {status === "loading" && <Spinner />}
        {buckets?.length > 0 && status === "fulfilled" && (
          <div className="flex flex-wrap w-full">
            {buckets?.map((bucket) => (
              <BucketFolder {...bucket} key={nanoid()} />
            ))}
          </div>
        )}
      </div>
      {showCreateBucket && (
        <CreateNewItem
          type="createBucket"
          createBucketRef={createBucketRef}
          onClickOutside={(e) =>
            handleClickOutside(e, createBucketRef, setShowCreateBucket)
          }
          onCancel={() => setShowCreateBucket(false)}
          onSend={() => setShowCreateBucket(false)}
        />
      )}
    </>
  );
};
