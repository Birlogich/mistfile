export const handleClickOutside = (e, ref, closeFunc, type, initialValue) => {
  if (ref?.current && !ref?.current?.contains(e.target)) {
    if (type === "signUp") {
      closeFunc({ ...initialValue, [type]: false });
    }
    if (type === "signIn") {
      closeFunc({ ...initialValue, [type]: false });
    } else {
      closeFunc(false);
    }
  }
};
