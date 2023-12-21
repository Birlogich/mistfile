import { Start } from "./Start/Start";
import { Features } from "./Features/Features";
import { CountOn } from "./CountOn/CountOn";
import { Footer } from "./Footer/Footer";
import { Access } from "./Access/Access";
import { Testimonials } from "./Testimonials/Testimonials";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { setReferral } from "../../features/signInUser-slice";
import { useDispatch } from "react-redux";

export const Main = () => {
  const dispatch = useDispatch();
  const featuresRef = useRef(null);
  const testimonialRef = useRef(null);
  const [searchParams] = useSearchParams();
  const referralCode = searchParams.get("ref");

  useEffect(() => {
    if (referralCode) {
      dispatch(setReferral(referralCode));
    }
  }, []);

  const moveToAnchor = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full">
      <Start
        moveToAnchor={moveToAnchor}
        featuresRef={featuresRef}
        testimonialRef={testimonialRef}
      />
      <Features featuresRef={featuresRef} />
      <CountOn />
      <Access />
      <Testimonials testimonialRef={testimonialRef} />
      <Footer />
    </div>
  );
};
