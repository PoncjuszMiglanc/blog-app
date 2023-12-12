import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/scss/components/the-socials.scss";

const TheSocials = () => {
  return (
    <section className="socials" aria-label="social-media-links">
      <h3 className="socials__title">Dołącz do naszej społeczności</h3>
      <p className="socials__paragraph">
        Śledź nasze media społecznościowe i bądź na bierząco z nowymi
        publikacjami
      </p>
      <div className="socials__icons">
        <a className="socials__link" href="https://www.instagram.com/">
          <FontAwesomeIcon icon="fa-brands fa-instagram" size="3x" />
        </a>
        <a className="socials__link" href="https://www.facebook.com/">
          <FontAwesomeIcon icon="fa-brands fa-facebook" size="3x" />
        </a>
        <a className="socials__link" href="https://pinterest.com/">
          <FontAwesomeIcon icon="fa-brands fa-pinterest" size="3x" />
        </a>
        <a className="socials__link" href="https://youtube.com">
          <FontAwesomeIcon icon="fa-brands fa-youtube" size="3x" />
        </a>
        <a className="socials__link" href="https://twitter.com">
          <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" size="3x" />
        </a>
        <a href="https://tiktok.com">
          <FontAwesomeIcon
            className="socials__link"
            icon="fa-brands fa-tiktok"
            size="3x"
          />
        </a>
      </div>
    </section>
  );
};

export default TheSocials;
