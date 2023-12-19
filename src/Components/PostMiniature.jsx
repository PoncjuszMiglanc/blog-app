import PropTypes from "prop-types";
import "../assets/scss/components/post-miniature.scss";
import pic from "../assets/pic1.jpg";

const PostMiniature = ({ item }) => {
  return (
    <div className="miniature">
      {/* <img src={`http://localhost:8080/images/${item.image}`} alt={item.title} /> */}
      <img className="miniature__img" src={pic} alt={item.title} />
      <div className="miniature__wrapper">
        <h2 className="miniature__title">{item.title}</h2>
      </div>
    </div>
  );
};

PostMiniature.propTypes = {
  item: PropTypes.object,
};

export default PostMiniature;
