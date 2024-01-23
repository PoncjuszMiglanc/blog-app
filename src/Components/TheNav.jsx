import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/AuthHooks";
import UserControlls from "./UserControlls";
import NavLinks from "./NavLinks";
import "../assets/scss/components/the-nav.scss";

const TheNav = () => {
  const { isLoggedIn, userData } = useAuth();

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <Link to="/">LOGO</Link>
          <div className="header__panel">
            <NavLinks />
            <UserControlls />
          </div>
        </div>
      </header>
      {isLoggedIn ? (
        <div className="header__login-panel">
          <p className="header__greet">
            witaj
            <span className="header__username">Wojciech</span>
          </p>
          <div className="header__options">
            <Link to={`/profile/${userData._id}`} className="header__auth-link">
              mój profil
            </Link>
            <Link to="/posts/create" className="header__auth-link">
              dodaj post
            </Link>
            <Link to="/profile/edit" className="header__auth-link">
              edytuj profil
            </Link>
            <Link
              to={`/profile/delete/${userData._id}`}
              className="header__auth-link"
            >
              usuń profil
            </Link>
          </div>
          <span className="header__status">jesteś zalogowany</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TheNav;
