import { TestimonialCard } from "../../UI/Main/TestimonialCard";
import { useEffect, useState } from "react";
import { testimonialsArr } from "../../MockData/testimonialsArr";

const buttonLeft = (
  <svg
    width="46"
    height="53"
    viewBox="0 0 46 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="1" y="0.76001" width="44" height="50.88" rx="16" stroke="black" />
    <path
      d="M26 32.6507C26 32.9078 25.9026 33.1544 25.7293 33.3361C25.556 33.5179 25.3209 33.62 25.0758 33.62C24.8306 33.62 24.5956 33.5179 24.4222 33.3361L18.2714 26.8854C18.1854 26.7955 18.1171 26.6887 18.0705 26.5711C18.024 26.4535 18 26.3274 18 26.2C18 26.0727 18.024 25.9466 18.0705 25.829C18.1171 25.7114 18.1854 25.6045 18.2714 25.5146L24.4222 19.0639C24.5956 18.8822 24.8306 18.78 25.0758 18.78C25.3209 18.78 25.556 18.8822 25.7293 19.0639C25.9026 19.2457 26 19.4922 26 19.7493C26 20.0064 25.9026 20.2529 25.7293 20.4347L20.2327 26.1992L25.7293 31.9654C25.9026 32.1471 26 32.3937 26 32.6507Z"
      fill="#23232D"
    />
  </svg>
);

const buttonRight = (
  <svg
    width="46"
    height="53"
    viewBox="0 0 46 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="1" y="0.76001" width="44" height="50.88" rx="16" stroke="black" />
    <path
      d="M21.1633 33.5282C20.9872 33.7149 20.7483 33.8198 20.4992 33.8198C20.2502 33.8198 20.0113 33.7149 19.8352 33.5282C19.6591 33.3416 19.5601 33.0883 19.5601 32.8243C19.5601 32.5603 19.6591 32.3071 19.8352 32.1204L25.4219 26.2002L19.8367 20.2782C19.7495 20.1858 19.6804 20.0761 19.6332 19.9553C19.586 19.8345 19.5617 19.7051 19.5617 19.5743C19.5617 19.4436 19.586 19.3142 19.6332 19.1934C19.6804 19.0726 19.7495 18.9629 19.8367 18.8704C19.924 18.778 20.0275 18.7047 20.1414 18.6546C20.2554 18.6046 20.3775 18.5789 20.5008 18.5789C20.6241 18.5789 20.7463 18.6046 20.8602 18.6546C20.9741 18.7047 21.0777 18.778 21.1649 18.8704L27.4149 25.4954C27.5022 25.5879 27.5714 25.6976 27.6186 25.8185C27.6658 25.9393 27.69 26.0689 27.6898 26.1997C27.6897 26.3305 27.6652 26.4599 27.6177 26.5807C27.5703 26.7014 27.5008 26.811 27.4133 26.9032L21.1633 33.5282Z"
      fill="#23232D"
    />
  </svg>
);

export const Testimonials = ({ testimonialRef }) => {
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
    setItems(testimonialsArr);
  }, []);

  const goToPrevSlide = () => {
    if (slide === 0) {
      setSlide(windowSize >= 650 ? items.length - 2 : items.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };

  const goToNextSlide = () => {
    if (
      windowSize >= 650
        ? slide === items.length - 2
        : slide === items.length - 1
    ) {
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
    if (
      windowSize >= 650
        ? direction > 10 && slide < items.length - 2
        : direction > 10 && slide < items.length - 1
    ) {
      setSlide(slide + 1);
    } else if (
      windowSize >= 650
        ? direction > 10 && slide === items.length - 2
        : direction > 10 && slide === items.length - 1
    ) {
      setSlide(0);
    }
    if (
      windowSize >= 650
        ? direction < -10 && slide < items.length - 2
        : direction < -10 && slide < items.length - 1
    ) {
      setSlide(windowSize >= 650 ? items.length - 2 : items.length - 1);
    } else if (direction < -10) {
      setSlide(0);
    }
    setTouchPosition(null);
  };

  return (
    <div
      className="flex items-center flex-col bg-[#E1EEF3] w-full pt-[147px] text-black pb-[110px] max-md:pt-[50px] max-md:pb-[50px] max-sm:px-[20px]"
      ref={testimonialRef}
    >
      <div className="flex flex-col w-full max-w-[1440px] px-[100px] max-md:px-[50px] max-sm:px-[20px]">
        <p className="text-[16px] leading-[20px] font-[500] mb-[15px] ">
          Testimontals
        </p>
        <div className="flex justify-between mb-[100px] max-md:mb-[50px] max-sm:mb-[25px]">
          <p className="text-[56px] font-[600] max-w-[600px] max-md:text-[45px] max-sm:text-[26px]">
            We love our clients because they love us.
          </p>
          <div className="flex justify-between w-full max-w-[100px] items-end max-md:max-w-[75px]">
            <button onClick={goToPrevSlide} className="max-md:w-[35px]">
              {buttonLeft}
            </button>
            <button onClick={goToNextSlide} className="max-md:w-[35px]">
              {buttonRight}
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div
            className="flex justify-between w-full max-w-[1160px]"
            style={{ paddingLeft: "-22px", paddingRight: "-22px" }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {windowSize >= 650 && (
              <>
                {items?.slice(slide, slide + 2).map((item) => (
                  <TestimonialCard {...item} key={item.id} />
                ))}
              </>
            )}
            {windowSize < 650 && (
              <>
                {items?.slice(slide, slide + 1).map((item) => (
                  <TestimonialCard {...item} key={item.id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
