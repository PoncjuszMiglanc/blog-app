import "./the-nav.scss";

const TheNav = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <div className="logo">Logo</div>

          <div className="header__nav">
            <nav>
              <ul>
                <li className="header__list-item">Home</li>
                <li className="header__list-item">About</li>
                <li className="header__list-item">Kontakt</li>
              </ul>
            </nav>
            <div className="header__logins">
              <button className="header__sign header__sign--in">Zaloguj</button>
              <button className="header__sign header__sign--up">
                Zarejestruj
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TheNav;
