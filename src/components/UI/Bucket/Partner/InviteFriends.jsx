import { useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Illustration from "../../../../assets/images/bucket/PartnerPage/Illustration.png";
import { useCallback, useState } from "react";
import { useTheme } from "../../../../features/theme/use-theme";

const copyText = (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12.5C2 9.73858 4.23858 7.5 7 7.5H10C10.5523 7.5 11 7.94772 11 8.5C11 9.05228 10.5523 9.5 10 9.5H7C5.34315 9.5 4 10.8431 4 12.5C4 14.1569 5.34315 15.5 7 15.5H10C10.5523 15.5 11 15.9477 11 16.5C11 17.0523 10.5523 17.5 10 17.5H7C4.23858 17.5 2 15.2614 2 12.5Z"
      fill="#6F767E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 8.5C13 7.94772 13.4477 7.5 14 7.5H17C19.7614 7.5 22 9.73858 22 12.5C22 15.2614 19.7614 17.5 17 17.5H14C13.4477 17.5 13 17.0523 13 16.5C13 15.9477 13.4477 15.5 14 15.5H17C18.6569 15.5 20 14.1569 20 12.5C20 10.8431 18.6569 9.5 17 9.5H14C13.4477 9.5 13 9.05228 13 8.5Z"
      fill="#6F767E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 12.5C8 11.9477 8.44772 11.5 9 11.5H15C15.5523 11.5 16 11.9477 16 12.5C16 13.0523 15.5523 13.5 15 13.5H9C8.44772 13.5 8 13.0523 8 12.5Z"
      fill="#6F767E"
    />
  </svg>
);

const getLink = (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 5.5H14C14.5523 5.5 15 5.94772 15 6.5V7.5H17V6.5C17 4.84315 15.6569 3.5 14 3.5H6C4.34315 3.5 3 4.84315 3 6.5V14.5C3 16.1569 4.34315 17.5 6 17.5H7V15.5H6C5.44772 15.5 5 15.0523 5 14.5V6.5C5 5.94772 5.44772 5.5 6 5.5Z"
      fill="#6F767E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 9.5H10C9.44772 9.5 9 9.94772 9 10.5V18.5C9 19.0523 9.44772 19.5 10 19.5H18C18.5523 19.5 19 19.0523 19 18.5V10.5C19 9.94772 18.5523 9.5 18 9.5ZM10 7.5C8.34315 7.5 7 8.84315 7 10.5V18.5C7 20.1569 8.34315 21.5 10 21.5H18C19.6569 21.5 21 20.1569 21 18.5V10.5C21 8.84315 19.6569 7.5 18 7.5H10Z"
      fill="#6F767E"
    />
  </svg>
);

export const InviteFriends = () => {
  const { referral } = useSelector((state) => state.verifyUser);
  const [theme] = useTheme();
  const [isCopied, setIsCopied] = useState({
    value: `https://mistfile.com/?ref=${referral}`,
    copied: false,
  });
  const onCopy = useCallback(() => {
    setIsCopied({ ...isCopied, copied: true });
    alert("Link copied to clickboard");
  }, []);

  const arrowRight = (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2929 18.2929C12.9024 18.6834 12.9024 19.3166 13.2929 19.7071C13.6834 20.0976 14.3166 20.0976 14.7071 19.7071L20.5 13.9142C21.281 13.1332 21.281 11.8668 20.5 11.0858L14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289C12.9024 5.68342 12.9024 6.31658 13.2929 6.70711L18.0858 11.5H4C3.44772 11.5 3 11.9477 3 12.5C3 13.0523 3.44772 13.5 4 13.5H18.0858L13.2929 18.2929Z"
        fill={`${theme === "dark" ? "#92929D" : "#FCFCFC"}`}
      />
    </svg>
  );

  return (
    <div
      className={`flex w-full  py-[47px] px-[24px] border-[1px] border-solid border-[#E1E1E1] rounded-[15px] mb-[32px] ${
        theme === "dark" ? "bg-[#1B1F27]" : "bg-[#FCFCFC]"
      }`}
    >
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col">
          <h2
            className={`text-gilroy font-[600] text-[32px] leading-[32px] mb-[32px] ${
              theme === "dark" ? "text-[#92929D]" : ""
            }`}
          >
            Invite Your Friends and Earn Money
          </h2>
          <label className="font-[500] text-[16px] leading-[16px] mb-[16px] text-[#6F767E]">
            Share your link
          </label>
          <div className="flex w-full max-lg:flex-col">
            <div className="relative w-full max-w-[442px] mr-[32px]">
              <input
                type="text"
                onChange={() =>
                  console.log("Hi from developer! LinkedIn : Ivan Zhigalev")
                }
                value={isCopied.value}
                className="w-full border-[1px] border-solid border-black py-[12px] pr-[12px] pl-[48px] rounded-[15px] max-lg:pl-[12px] max-lg:mb-[20px] text-[#6F767E]"
              ></input>
              <button className="absolute left-[12px] top-[50%] translate-y-[-50%] max-lg:hidden">
                {copyText}
              </button>
              <button className="absolute right-[12px] top-[50%] translate-y-[-50%] max-lg:hidden">
                {getLink}
              </button>
            </div>
            <CopyToClipboard onCopy={onCopy} text={isCopied.value}>
              <button className="flex items-center justify-center bg-black text-white rounded-[15px] max-w-[115px] w-full text-[15px] h-[47px] max-sm:max-w-none">
                <span
                  className={`mr-[8px] font-[700] ${
                    theme === "dark" ? "text-[#92929D]" : "text-white"
                  }`}
                >
                  Share
                </span>{" "}
                {arrowRight}
              </button>
            </CopyToClipboard>
          </div>
        </div>
        <div className="w-full max-w-[191px] h-auto max-sm:hidden">
          <img src={Illustration} alt="illustration" />
        </div>
      </div>
    </div>
  );
};
