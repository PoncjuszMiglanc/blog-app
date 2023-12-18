import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/AuthHooks";
import UserControlls from "./UserControlls";
import NavLinks from "./NavLinks";
import "../assets/scss/components/the-nav.scss";

const TheNav = () => {
  const { isLoggedIn } = useAuth();

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
          <Link to="#" className="header__auth-link">
            Mój Profil
          </Link>
          <Link to="/posts/create" className="header__auth-link">
            Dodaj Post
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TheNav;
