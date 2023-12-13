import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/scss/components/the-slider.scss";
import pic2 from "../assets/pic2.webp";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";

const TheSlider = () => {
  const users = [
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

  const [itemIndex, setItemIndex] = useState(0);

  const nextItemIndex = () => {
    // return itemIndex == 4 ? setItemIndex(0) : setItemIndex(itemIndex + 1);
    setItemIndex((index) => {
      if (index == users.length - 1) return 0;
      return index + 1;
    });
  };

  const prevItemIndex = () => {
    // return itemIndex == 0 ? setItemIndex(4) : setItemIndex(itemIndex - 1);
    setItemIndex((index) => {
      if (index == 0) return users.length - 1;
      return index - 1;
    });
  };

  return (
    <div className="slider-wrapper">
      <button
        onClick={prevItemIndex}
        className="slider-wrapper__btn slider-wrapper__btn--dalej"
      >
        <FontAwesomeIcon icon="fa-caret-left" size="2x" />
      </button>
      <button
        onClick={nextItemIndex}
        className="slider-wrapper__btn slider-wrapper__btn--cofej"
      >
        <FontAwesomeIcon icon="fa-caret-right" size="2x" />
      </button>
      <div className="slider">
        {users.map(({ picture, name, text }, index) => {
          return (
            <div
              key={index}
              className="slider__container"
              style={{ translate: `${-100 * itemIndex}%` }}
            >
              <div className="photo">
                <img className="photo__img" src={picture} alt="" />
              </div>
              <div className="card">
                <div>
                  <FontAwesomeIcon
                    className="card__icon"
                    icon="fa-quote-left"
                    size="3x"
                  />
                  <p className="card__text">{text}</p>
                </div>
                <a className="card__author" href="#" rel="author">
                  {name}
                </a>
              </div>
            </div>
          );
        })}
        {/* <div className="slider__container">
          <div className="photo">
            <img className="photo__img" src={pic} alt="" />
          </div>
          <div className="card">
            <div>
              <FontAwesomeIcon
                className="card__icon"
                icon="fa-quote-left"
                size="3x"
              />
              <p className="card__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                placeat tenetur culpa quidem repudiandae deserunt rerum adipisci
                eum nisi nam?
              </p>
            </div>
            <a className="card__author" href="#" rel="author">
              Bartek Kowalski
            </a>
          </div>
        </div> */}
        {/* <div className="slider__container">
          <div className="photo">
            <img className="photo__img" src={pic} alt="" />
          </div>
          <div className="card">
            <div>
              <FontAwesomeIcon
                className="card__icon"
                icon="fa-quote-left"
                size="3x"
              />
              <p className="card__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                placeat tenetur culpa quidem repudiandae deserunt rerum adipisci
                eum nisi nam?
              </p>
            </div>
            <a className="card__author" href="#" rel="author">
              Bartek Kowalski
            </a>
          </div>
        </div> */}
        {/* <div className="slider__container">
          <div className="photo">
            <img className="photo__img" src={pic} alt="" />
          </div>
          <div className="card">
            <div>
              <FontAwesomeIcon
                className="card__icon"
                icon="fa-quote-left"
                size="3x"
              />
              <p className="card__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                placeat tenetur culpa quidem repudiandae deserunt rerum adipisci
                eum nisi nam?
              </p>
            </div>
            <a className="card__author" href="#" rel="author">
              Bartek Kowalski
            </a>
          </div>
        </div> */}
        {/* <div className="slider__container">
          <div className="photo">
            <img className="photo__img" src={pic} alt="" />
          </div>
          <div className="card">
            <div>
              <FontAwesomeIcon
                className="card__icon"
                icon="fa-quote-left"
                size="3x"
              />
              <p className="card__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                placeat tenetur culpa quidem repudiandae deserunt rerum adipisci
                eum nisi nam?
              </p>
            </div>
            <a className="card__author" href="#" rel="author">
              Bartek Kowalski
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TheSlider;
