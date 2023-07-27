import "./the-nav.scss";
import { Link } from "react-router-dom";

const TheNav = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <div className="logo">
            <Link to="/">LOGO</Link>
          </div>

          <div className="header__nav">
            <nav>
              <ul>
                <li className="header__list-item">Home</li>
                <li className="header__list-item">
                  <Link to="/posts/1">Post</Link>
                </li>
                <li className="header__list-item">
                  <Link to="/posts/create">Nowy</Link>
                </li>
              </ul>
            </nav>
            <div className="header__logins">
              <button className="header__sign header__sign--in">
                <Link to="/signin">Zaloguj</Link>
              </button>
              <button className="header__sign header__sign--up">
                <Link to="/signup">Zarejestruj</Link>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TheNav;
