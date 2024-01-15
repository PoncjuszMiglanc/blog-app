import PropTypes from "prop-types";
import "../assets/scss/components/mini.scss";

const Mini = ({ item }) => {
  return (
    <div className="mini">
      <img
        className="mini__image"
        src={`http://localhost:8080/images/${item.image}`}
        alt="blogpost"
      />
    </div>
  );
};

export default Mini;

Mini.propTypes = {
  item: PropTypes.object,
};
