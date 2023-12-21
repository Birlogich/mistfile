import { ReactComponent as MistfileLogo } from "../../../assets/images/main/MistfileLogo.svg";
import { ReactComponent as EnvelopeIcon } from "../../../assets/images/main/envelopeIcon.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full bg-black pt-[96px] pb-[62px] flex justify-center max-md:py-[50px]">
      <div className="flex flex-col w-full justify-between max-w-[1440px] px-[100px] max-md:px-[50px] max-sm:px-[20px]">
        <div className="w-full flex border-solid border-b-[1px] border-[#333333] pb-[110px] items-center mb-[48px] max-md:pb-[50px]">
          <div className="w-full flex items-center max-md:hidden">
            <MistfileLogo className="mr-[7px]" />
            <Link to="/" className="text-[23px] font-[800] leading-[18px]">
              MISTFILE
            </Link>
          </div>
          <form className="flex w-full max-w-[445px] justify-between items-center max-md:max-w-none">
            <div className="relative mr-[20px] max-md:max-w-[200px]">
              <input
                type="email"
                placeholder="Your email"
                className="py-[15px] text-[16px] leading-[26px] font-[400] tracking-[-0.36px] bg-[#454546] pl-[64px] pr-[15px] rounded-[50px] w-full max-w-[255px]"
              ></input>
              <EnvelopeIcon className="absolute top-[50%] translate-y-[-50%] left-[20px]" />
            </div>
            <button
              type="sumbit"
              className="flex font-[700] items-center justify-center bg-white px-[44px] py-[15px] text-black rounded-[50px] w-full max-w-[160px]"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex w-full justify-between">
          <p className="text-[14px] leading-[24px]">
            © 2023 MISTFILE. All rights reserved.
          </p>
          <div className="flex w-full justify-between max-w-[354px]">
            <a
              href={require("../../../files/privacy.pdf")}
              download="privacy"
              className="text-[14px] font-[500]"
            >
              Privacy Policy
            </a>
            <a
              href={require("../../../files/terms.pdf")}
              download="terms"
              className="text-[14px] font-[500]"
            >
              Terms of Service
            </a>
            <Link to="policy" className="text-[14px] font-[500]">
              Takedown Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
