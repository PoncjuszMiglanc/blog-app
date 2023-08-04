import "./secondary-post.scss";
import PostInfo from "./PostInfo";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
//możliwe, że react context bo przez dwa komponenty leci ten props. ale to później
const SecondaryPost = ({ post }) => {
  return (
    <>
      <div className="post">
        <div
          className="image"
          style={{
            backgroundImage: `url("http://localhost:8080/images/${post.image}")`,
          }}
        ></div>
        {/* <Link to="/posts/1">KLIK</Link> */}
        <PostInfo
          post={post}
          color={"rgb(17, 16, 30)"}
          padding={0}
          margin={0.8}
        />
      </div>
    </>
  );
};

SecondaryPost.propTypes = {
  post: PropTypes.object,
};

export default SecondaryPost;
