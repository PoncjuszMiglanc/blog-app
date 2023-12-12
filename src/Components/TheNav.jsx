import { Link } from "react-router-dom";
import UserControlls from "./UserControlls";
import NavLinks from "./NavLinks";
import "../assets/scss/components/the-nav.scss";

const TheNav = () => {
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
    </>
  );
};

export default TheNav;
