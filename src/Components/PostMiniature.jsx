import PropTypes from "prop-types";
import PostInfo from "./PostInfo";
import "../assets/scss/components/post-miniature.scss";

const PostMiniature = ({ item }) => {
  return (
    <div className="one">
      <img
        className="one__image"
        src={`http://localhost:8080/images/${item.image}`}
        alt="blogpost"
      />
      <div className="overlay">
        <PostInfo item={item} style={"rgb(242, 240, 240)"} />
        <h2 className="overlay__title">{!item ? "" : item.title}</h2>
        {/* a tutaj będą tagi */}
      </div>
    </div>
  );
};

PostMiniature.propTypes = {
  item: PropTypes.object,
};

export default PostMiniature;
