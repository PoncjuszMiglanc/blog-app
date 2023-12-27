import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import DeleteModal from "./DeleteModal";
import "../assets/scss/components/post-options.scss";

const PostOptions = ({ postId }) => {
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  const deletePost = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/deletepost", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: postId }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setIsVisible(false);
    navigate("/");
  };

  return (
    <div className="options">
      {isVisible ? (
        <DeleteModal setIsVisible={setIsVisible} deletePost={deletePost} />
      ) : (
        ""
      )}
      <div className="options__share">
        <a className="options__link" href="https://www.instagram.com/">
          <FontAwesomeIcon icon="fa-brands fa-instagram" size="2x" />
        </a>
        <a className="options__link" href="https://www.facebook.com/">
          <FontAwesomeIcon icon="fa-brands fa-facebook" size="2x" />
        </a>
        <a className="options__link" href="https://pinterest.com/">
          <FontAwesomeIcon icon="fa-brands fa-pinterest" size="2x" />
        </a>
        <a className="options__link" href="https://youtube.com">
          <FontAwesomeIcon icon="fa-brands fa-youtube" size="2x" />
        </a>
        <a className="options__link" href="https://twitter.com">
          <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" size="2x" />
        </a>
        <a className="options__link" href="https://tiktok.com">
          <FontAwesomeIcon icon="fa-brands fa-tiktok" size="2x" />
        </a>
      </div>
      <div className="options__btns">
        <Link to={`/posts/update/${postId}`}>
          <button className="options__btn options__btn--edit">edytuj</button>
        </Link>
        <button
          className="options__btn options__btn--delete"
          onClick={() => setIsVisible(true)}
        >
          usuń posta
        </button>
      </div>
    </div>
  );
};

PostOptions.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default PostOptions;
