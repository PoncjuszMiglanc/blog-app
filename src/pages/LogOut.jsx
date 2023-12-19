import { Link } from "react-router-dom";
import MainContainer from "../Components/MainContainer";
import "../assets/scss/pages/log-out.scss";

const LogOut = () => {
  return (
    <MainContainer>
      <div className="logout">
        <h1 className="logout__title">Wylogowano</h1>
        <p className="logout__subtitle">Udało ci się bezpiecznie wylogowac </p>
        <p className="logout__cta">
          Wróć do{" "}
          <span className="logout__cta-link">
            <Link to="/">Strony głównej</Link>
          </span>
        </p>
      </div>
    </MainContainer>
  );
};

export default LogOut;
