import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/scss/components/post-options.scss";

const PostOptions = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="options">
      {isVisible ? <DeleteModal setIsVisible={setIsVisible} /> : ""}
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
        <button className="options__btn options__btn--edit">edytuj</button>
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

export default PostOptions;
