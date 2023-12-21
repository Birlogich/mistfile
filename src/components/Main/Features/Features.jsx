import { Card } from "../../UI/Main/Card";
import { featureCardsArr } from "../../MockData/featureCardsArr";
import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const Features = ({ featuresRef }) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth || null);
  const [items, setItems] = useState(null);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setItems(featureCardsArr);
  }, []);

  const goToPrevSlide = () => {
    if (slide === 0) {
      setSlide(items.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };

  const goToNextSlide = () => {
    if (slide === items.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }
    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;
    if (direction > 10 && slide < items.length - 1) {
      setSlide(slide + 1);
    } else if (direction > 10 && slide === items.length - 1) {
      setSlide(0);
    }
    if (direction < -10 && slide < items.length - 1) {
      setSlide(items.length - 1);
    } else if (direction < -10) {
      setSlide(0);
    }
    setTouchPosition(null);
  };

  return (
    <div
      className="flex flex-col w-full items-center pb-[100px] text-[#FFFFFF] bg-[#000013] pt-[120px] max-md:pt-[50px] max-md:pb-[50px]"
      ref={featuresRef}
    >
      <p className="text-[20px] leading-[20px] mb-[16px] max-md:text-[26px]">
        Features
      </p>
      <h2 className="font-bold text-[36px] leading-[16px] mb-[140px] text-center max-md:mb-[50px] max-md:text-[20px]">
        Discover our amazing features.
      </h2>
      {windowSize > 600 && (
        <div className="flex justify-between w-full max-w-[1440px] px-[100px] flex-wrap max-md:px-[50px]">
          {featureCardsArr.map((card) => (
            <Card {...card} key={card.id} />
          ))}
        </div>
      )}
      {windowSize <= 600 && (
        <div
          className="flex justify-between w-full max-w-[1440px] px-[100px] flex-wrap max-md:px-[50px] max-md:justify-center max-sm:px-[20px] relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <FaArrowAltCircleLeft
            className="w-[50px] mr-[20px] top-[50%] translate-y-[-50%] left-3 absolute"
            onClick={goToNextSlide}
          />
          {items?.slice(slide, slide + 1).map((card) => (
            <Card {...card} key={card.id} />
          ))}
          <FaArrowAltCircleRight
            className="w-[50px] ml-[20px] top-[50%] right-3 absolute translate-y-[-50%]"
            onClick={goToPrevSlide}
          />
        </div>
      )}
    </div>
  );
};
