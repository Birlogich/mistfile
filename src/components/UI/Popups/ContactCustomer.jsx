export const ContactCustomer = ({ onClick }) => {
  return (
    <div className="text-gilroy w-full h-full overflow-hidden flex items-center justify-center fixed top-0 left-0 z-10 bg-[#F4F4F4] bg-opacity-90 max-md:px-[20px]">
      <div className="flex flex-col w-full max-w-[514px] p-[40px] text-center bg-white rounded-[15px]">
        <p className="font-[700] text-[32px] mb-[40px]">We will contact you</p>
        <p className="font-[400] text-[14px] leading-[19px] mb-[40px]">
          We will contact you to process your withdrawal request. Be on the look
          out within your email for our team!
        </p>
        <button
          onClick={onClick}
          className="text-[16px] bg-black text-white font-[700] leading-[16px] w-full py-[12px] rounded-[15px]"
        >
          Ok
        </button>
      </div>
    </div>
  );
};
