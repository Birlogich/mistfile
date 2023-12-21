import { useForm } from "react-hook-form";
import { AverageButton } from "../Main/AverageButton";
import { SignUpRadioButton } from "./SignUpRadioButton";
import { useDispatch, useSelector } from "react-redux";
import { setUserType } from "../../../features/signInUser-slice";
import { signIn } from "../../../features/signInUser-slice";

const radioButtonArr = [
  {
    label: "Individual",
    value: "individual",
    name: "individual",
    id: 1,
    checked: true,
  },
  { label: "Developer", value: "developer", name: "developer", id: 2 },
  { label: "Product Manager", value: "manager", name: "manager", id: 3 },
  { label: "Creator", value: "creator", name: "creator", id: 4 },
  { label: "C-Suite/Founder", value: "founder", name: "founder", id: 5 },
  { label: "UI/UX Designer", value: "designer", name: "designer", id: 6 },
];

const signWrapper =
  "w-full h-full overflow-hidden flex items-center justify-center fixed top-0 left-0 backdrop-blur-[6px] z-10";
const signBody =
  "flex flex-col w-full max-w-[556px] p-[40px] text-center bg-white shadow-popupShadow rounded-[15px] max-md:mx-[20px]";
const signTitle = "font-[700] text-[32px] leading-[32px] mb-[40px] text-black";
const signLabel =
  "font-[400] text-[16px] leading-[16px] text-[#1D2433] mb-[8px]";
const signInput =
  "w-full text-[#1D2433] max-w-[476px] border-[1px] border-solid border-[#E1E6EF] py-[8px] pl-[10px] font-[400] text-[16px] leading-[24px]";
const buttonWrapper =
  "flex w-full justify-between text-[16px] leading-[16px] font-[700]";

/* 'test@gmail.com' */

export const SignPopup = ({
  cancelClick,
  refSignIn,
  refSignUp,
  clickOutside,
  type,
  setshowVerifySignPopup,
  setshowSignPopup,
}) => {
  const dispatch = useDispatch();
  const { userType } = useSelector((state) => state.userData);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const cancelButtonProps = {
    title: "Cancel",
    background: "bg-transparent",
    maxWidth: "max-w-[232px]",
    textColor: "text-black",
    border: "border-[1px] border-solid border-[#E1E6EF]",
    paddingY: "py-[12px]",
    onClick: cancelClick,
  };

  const signInButtonProps = {
    title: `${type === "signUp" ? "Sign Up" : "Sign In"}`,
    background: "bg-black",
    maxWidth: "max-w-[232px]",
    textColor: "text-white",
    paddingY: "py-[12px]",
  };

  const signUpButtonProps = {
    title: "Sign Up",
    background: "bg-black",
    textColor: "text-white",
    paddingY: "py-[12px]",
    border: "rounded-[10px]",
    disabled: errors?.email > 1 ? true : false,
  };

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

  const sendRequest = (e) => {
    dispatch(signIn(e.email, userType ? userType : "individual"));
    setshowSignPopup({
      signIn: false,
      signUp: false,
    });
    setTimeout(() => setshowVerifySignPopup(true), 1000);
    setTimeout(() => setshowVerifySignPopup(false), 3000);
  };

  return (
    <div className={signWrapper} onClick={clickOutside}>
      <div className={signBody} ref={type === "signIn" ? refSignIn : refSignUp}>
        <p className={signTitle}>
          {type === "signUp" && "Sign Up"}
          {type === "signIn" && "Sign In"}
        </p>
        <form
          onSubmit={handleSubmit((e) => {
            sendRequest(e);
          })}
          className="flex flex-col text-left"
          name="signUp"
        >
          <label className={signLabel}>Enter Your Email</label>
          <div className="mb-[20px]">
            <input
              name="email"
              noValidate
              {...validationOptions}
              className={signInput}
            ></input>
            {errors?.email && (
              <p className="text-[red]">{errors?.email?.message}</p>
            )}
          </div>
          {type === "signUp" && (
            <>
              <label className={signLabel}>Which one best Describes you?</label>
              <div className="flex items-center flex-wrap mb-[24px]">
                {radioButtonArr.map((button) => (
                  <SignUpRadioButton
                    {...button}
                    key={button.id}
                    onChange={() => dispatch(setUserType(button.value))}
                    checked={userType === button.value}
                  />
                ))}
              </div>
            </>
          )}
          {type === "signUp" && (
            <div className={buttonWrapper}>
              <AverageButton {...cancelButtonProps} />
              <AverageButton {...signInButtonProps} />
            </div>
          )}
          {type === "signIn" && (
            <AverageButton {...signUpButtonProps} title={"Sign In"} />
          )}
        </form>
      </div>
    </div>
  );
};
