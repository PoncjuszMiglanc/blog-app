import "../assets/scss/pages/edit-profile.scss";
import MainContainer from "../Components/MainContainer";

const EditProfile = () => {
  return (
    <MainContainer>
      <section className="edit-card">
        <h1 className="edit-card__title">Edycja profilu</h1>
        <form>
          {/* możliwe, że formem bd wysyłał, i że atrybuty name w inputach do czegoś sie przydadzą */}
          <div className="edit-card__form">
            <label className="edit-card__label" htmlFor="">
              Login
            </label>
            <input
              className="edit-card__input"
              type="text"
              placeholder="podaj nowy login"
            />
          </div>
          <div className="edit-card__form">
            <label className="edit-card__label" htmlFor="">
              Email
            </label>
            <input
              className="edit-card__input"
              type="email"
              placeholder="podaj nowy adres email"
            />
          </div>
          <div className="edit-card__form">
            <label className="edit-card__label" htmlFor="">
              Hasło
            </label>
            <input
              className="edit-card__input"
              type="password"
              placeholder="podaj nowe hasło"
            />
          </div>
          <div className="edit-card__form">
            <label className="edit-card__label" htmlFor="">
              Zdjęcie profilowe
            </label>
            <input className="edit-card__file" type="file" />
          </div>
          <div className="edit-card__form">
            <label className="edit-card__label" htmlFor="">
              Kilka słów o sobie
            </label>
            <textarea className="edit-card__textarea" rows="8"></textarea>
          </div>
        </form>
        <button className="edit-card__btn">Anuluj</button>
        <button className="edit-card__btn">Wyślij</button>
      </section>
    </MainContainer>
  );
};

export default EditProfile;
