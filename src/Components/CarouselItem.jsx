import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "../assets/scss/components/carousel-item.scss";

const CarouselItem = ({ item }) => {
  return (
    <div className="xxx">
      <div className="photox">
        <img className="photox__img" src={item.picture} alt={item.name} />
      </div>
      <div className="cardx">
        <div>
          <FontAwesomeIcon
            className="cardx__icon"
            icon="fa-quote-left"
            size="3x"
          />
          <p className="cardx__text">{item.text}</p>
        </div>
        <a className="cardx__author" href="#" rel="author">
          {item.name}
        </a>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  item: PropTypes.object,
};

export default CarouselItem;
