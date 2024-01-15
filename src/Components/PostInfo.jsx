import PropTypes from "prop-types";
import "../assets/scss/components/post-info.scss";

const PostInfo = ({ item, style }) => {
  return (
    <div className="info">
      <p className="info__author" style={{ color: style }}>
        {!item ? "" : item.author}
      </p>
      <span
        className="info__separator"
        style={{ backgroundColor: style }}
      ></span>
      <time
        className="info__date"
        dateTime={
          !item ? "" : new Date(item.createdAt).toLocaleDateString("en-GB")
        }
        style={{ color: style }}
      >
        {!item
          ? ""
          : new Date(item.createdAt).toLocaleDateString("pl-PL", {
              month: "long",
              year: "numeric",
              day: "numeric",
            })}
      </time>
    </div>
  );
};

PostInfo.propTypes = {
  item: PropTypes.object,
  style: PropTypes.string,
};

export default PostInfo;
