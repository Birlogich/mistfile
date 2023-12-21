import { useState } from "react";
import { useForm } from "react-hook-form";
import getLink from "../../../assets/images/bucket/menu/getLink.png";

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

export const ShareBucket = ({ onCancel, shareBucketRef, onClick, url }) => {
  const [currentUrl, setCurrentUrl] = useState(url);
  const [email, setEmail] = useState("");

  async function copyToClip(e) {
    e.preventDefault();
    const copiedUrl = await navigator.clipboard.writeText(url);
    setCurrentUrl(copiedUrl);
    onCancel();
  }

  const addEmail = (e) => {
    setEmail(e.email);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const validationOptions = {
    ...register("email", {
      required: "Email is required",
      minLength: {
        value: 6,
        message: "Email is too short",
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Please enter a valid email",
      },
    }),
  };

  return (
    <div
      className="w-full h-full overflow-hidden flex items-center justify-center fixed top-0 left-0 bg-[rgba(244,244,244,0.8)] z-10"
      onClick={onClick}
    >
      <div
        className="flex flex-col w-full max-w-[632px] bg-white text-black p-[25px] shadow-[-40px_-42px_82px_0px_#00000012]"
        ref={shareBucketRef}
      >
        <div className="flex justify-between mb-[24px]">
          <p className="text-gilroy text-[24px] leading-[28px]">Share Bucket</p>
          <button onClick={onCancel}>{closeBtn}</button>
        </div>
        <form
          onSubmit={handleSubmit((e) => {
            addEmail(e);
          })}
          className="flex flex-col w-full"
        >
          <div className="flex flex-col w-full relative pb-[25px]">
            <label>Email/Name</label>
            <div className="flex justify-between">
              <input
                name="email"
                noValidate
                {...validationOptions}
                type="text"
                className="flex w-full max-w-[494px] rounded-[10px] items-center justify-center border-[#E1E6EF] border-solid border-[1px] py-[8px] px-[9px] text-[16px] font-[400] text-black"
                placeholder="abc@gmail.com"
              ></input>
              <button className="flex w-full max-w-[74px] py-[12px] bg-black text-[16px] leading-[16px] items-center justify-center text-white rounded-[10px]">
                Invite
              </button>
            </div>
            {errors?.email && (
              <p className="text-[red]">{errors?.email?.message}</p>
            )}
          </div>
        </form>
        <div className="flex flex-col pb-[24px]">
          <p className="text-gilroy font-[400] text-[14px] leading-[20px] mb-[25px] pb-[25px] border-solid border-b-[1px] border-[#E1E6EF]">
            {email === "" ? "" : email}
          </p>
        </div>
        <button className="flex items-center">
          <img src={getLink} className="mr-[5px]" alt="copyLink"></img>
          <span onClick={copyToClip}>Copy Link</span>
        </button>
      </div>
    </div>
  );
};
