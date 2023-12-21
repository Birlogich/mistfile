import { useState, useRef } from "react";

export const useChangeVisibility = () => {
  const refSignUp = useRef(null);
  const refSignIn = useRef(null);
  const refVefifySignUp = useRef(null);

  const [showSignPopup, setshowSignPopup] = useState({
    signIn: false,
    signUp: false,
  });
  const [showVerifySignPopup, setshowVerifySignPopup] = useState(false);

  const changeVisibilitySign = (value, type) => {
    if (type === "signIn") {
      setshowSignPopup({ ...showSignPopup, signIn: value });
    }
    if (type === "signUp") {
      setshowSignPopup({ ...showSignPopup, signUp: value });
    }
  };

  return [
    refSignUp,
    refSignIn,
    refVefifySignUp,
    showVerifySignPopup,
    setshowVerifySignPopup,
    changeVisibilitySign,
    setshowSignPopup,
    showSignPopup,
  ];
};
