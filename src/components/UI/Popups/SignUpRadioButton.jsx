export const SignUpRadioButton = ({ label, value, onChange, checked }) => {
  const radioButtonStyle =
    "flex py-[10px] px-[18px] text-[#494F5B] bg-[#F8F9FC] border-solid border-[1px] border-[#747A83] rounded-[10px] justify-center text-center mb-[16px] mr-[16px]";

  return (
    <label
      htmlFor={value}
      className={`${radioButtonStyle} font-[600] text-[14px] leading-[16px] text-black ${
        checked ? "bg-black text-white" : ""
      }`}
    >
      <input
        className="hidden"
        type="radio"
        value={value}
        id={value}
        onChange={onChange}
        checked={checked}
      ></input>
      {label}
    </label>
  );
};
