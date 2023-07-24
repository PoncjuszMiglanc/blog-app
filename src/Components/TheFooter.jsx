import "./the-footer.scss";

const TheFooter = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__top">
            <div className="left-up">
              <h3 className="footer__header">Dołącz do naszego zespołu</h3>
              <p className="footer__paragraph">
                Well send you a nice letter once per week. No spam.
              </p>
            </div>
            <div className="footer__right-up">
              <input
                className="footer__input"
                type="text"
                placeholder="podaj adres e-mail"
              />
              <button className="footer__btn">Dołącz</button>
            </div>
          </div>

          <div className="footer__center">
            <div className="footer__center-left">
              <p>logo * ikonka * i coś jeszcze</p>
              <p className="footer__paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam, facere.
              </p>
            </div>
            <ul>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
            </ul>
            <ul>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
            </ul>
            <ul>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
            </ul>
            <ul>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
            </ul>
            <ul>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
              <li>Słówko</li>
            </ul>
          </div>
          <div className="footer__bottom">
            <p>Data i tak dalej</p>
            <p>Crafted in Piechcin, Poland</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default TheFooter;
