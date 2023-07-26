import "./form-card.scss";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import PropTypes from "prop-types";

const FormCard = ({ items, cardText }) => {
  //byc moze card zmienie na card__form bo sie powiela wrapper
  return (
    <>
      <div className="card">
        <div className="card__form">
          <h1 className="card__header">{cardText.head}</h1>
          <p className="card__sub">{cardText.sub}</p>
          <form action="">
            {items.map((item) => {
              return (
                <InputField
                  key={Math.random()}
                  label={item.label}
                  placeholder={item.placeholder}
                  type={item.type}
                  id={item.id}
                />
              );
            })}
          </form>
          <button className="card__btn">{cardText.btn}</button>

          <div className="card__divider">lub</div>
          <p className="card__sub">
            {cardText.cta}
            <span className="card__sub-login">
              <Link to={cardText.link}>{cardText.invitation}</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

FormCard.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  cardText: PropTypes.object,
};

export default FormCard;
