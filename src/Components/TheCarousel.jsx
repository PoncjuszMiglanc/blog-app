import { useMemo, useRef, useState, useLayoutEffect, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/scss/components/the-carousel.scss";
import CarouselItem from "./CarouselItem";
import pic2 from "../assets/pic2.webp";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";

const TheSlider = () => {
  const users = useMemo(() => {
    return [
      {
        picture: pic2,
        name: "Bartosz",
        text: "Pracuję tu od dwóch lat i cenię sobie przyjazną atmosferę w firmie. Współpraca w zespole jest naprawdę świetna, co sprawia, że każdy dzień pracy przynosi mi satysfakcję.",
      },
      {
        picture: pic3,
        name: "Anna",
        text: "Jako programista doceniam elastyczne godziny pracy, co pozwala mi na lepsze dostosowanie się do rytmu tworzenia oprogramowania. Kreatywna swoboda i wsparcie ze strony kolegów zawsze są na miejscu.",
      },
      {
        picture: pic4,
        name: "Karolina",
        text: "W pracy doceniam klarowność celów i możliwość wpływania na kształt projektów. Firma stawia na rozwój pracowników, co pozwala mi nieustannie podnosić swoje kwalifikacje.",
      },
      {
        picture: pic5,
        name: "Marcin",
        text: "Pracuję w magazynie od kilku lat i zawsze mogę liczyć na solidne wsparcie ze strony przełożonych. Organizacja pracy jest na wysokim poziomie, co ułatwia codzienne obowiązki.",
      },
      {
        picture: pic6,
        name: "Ewa",
        text: "Firma stawia na innowacje, co sprawia, że moja praca w dziale marketingu jest fascynująca. Są regularne szkolenia, które pomagają mi być na bieżąco z najnowszymi trendami w branży.",
      },
    ];
  }, []);

  const containerRef = useRef();
  const [current, setCurrent] = useState(1);
  const [translateX, setTranslateX] = useState(0);

  useLayoutEffect(() => {
    setTranslateX(containerRef.current.clientWidth * current);
  }, []);

  const slides = useMemo(() => {
    let items = users.map((user, index) => (
      <CarouselItem key={index} item={user} />
    ));

    return [
      <CarouselItem key={users.length + 1} item={users[users.length - 1]} />,
      ...items,
      <CarouselItem key={users.length + 2} item={users[0]} />,
    ];
  }, []);

  const slideItems = (mode) => {
    containerRef.current.style.transitionDuration = "400ms";
    if (mode === "previous") {
      if (current <= 1) {
        setTranslateX(0);
        setCurrent(users.length); //to odpala efekt #2
      } else {
        setTranslateX(containerRef.current.clientWidth * (current - 1));
        setCurrent((prev) => --prev);
      }
    } else if (mode === "next") {
      if (current >= users.length) {
        setTranslateX(containerRef.current.clientWidth * (users.length + 1));
        setCurrent(1); //to odpala efekt #1
      } else {
        setTranslateX(containerRef.current.clientWidth * (current + 1));
        setCurrent((prev) => ++prev);
      }
    }
  };

  useEffect(() => {
    const transitionEnd = () => {
      if (current <= 1) {
        containerRef.current.style.transitionDuration = "0ms";
        setTranslateX(containerRef.current.clientWidth * current);
        //#1
      }
      if (current >= users.length) {
        containerRef.current.style.transitionDuration = "0ms";
        setTranslateX(containerRef.current.clientWidth * users.length);
        //#2
      }
    };

    document.addEventListener("transitionend", transitionEnd);

    return () => {
      document.removeEventListener("transitionend", transitionEnd);
    };
  }, [current, users, translateX]);

  return (
    <div className="slider-wrapper">
      <button
        onClick={() => slideItems("previous")}
        className="slider-wrapper__btn slider-wrapper__btn--dalej"
      >
        <FontAwesomeIcon icon="fa-caret-left" size="2x" />
      </button>
      <button
        onClick={() => slideItems("next")}
        className="slider-wrapper__btn slider-wrapper__btn--cofej"
      >
        <FontAwesomeIcon icon="fa-caret-right" size="2x" />
      </button>
      <div className="slider">
        <div
          className="slider__container"
          style={{ translate: `${-translateX}px` }}
          ref={containerRef}
        >
          {slides}
        </div>
      </div>
    </div>
  );
};

export default TheSlider;
