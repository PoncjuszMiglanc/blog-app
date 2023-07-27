import MainContainer from "../Components/MainContainer";
import InputField from "../Components/InputField";
import "./create-post.scss";

const CreatePost = () => {
  return (
    <>
      <MainContainer>
        <div className="create">
          <h1 className="create__title">CreatePost</h1>
          <div className="category">
            <label className="category__label" htmlFor="kategorie">
              Karegoria
            </label>
            <select
              className="category__select"
              name="kategoria"
              id="kategoria"
            >
              <option className="category__option" value="recenzja">
                Recenzja
              </option>
              <option className="category__option" value="artykuł">
                Artykuł
              </option>
              <option className="category__option" value="esej">
                Esej
              </option>
            </select>
          </div>
          <InputField
            label={"Tytuł"}
            type={"text"}
            placeholder={"Wpisz tytuł tekstu"}
            id={"tytuł"}
          />
          <InputField
            label={"Cytat"}
            type={"text"}
            placeholder={"Podaj cytat z tekstu"}
            id={"cytat"}
          />
          <InputField
            label={"Autor"}
            type={"text"}
            placeholder={"Nazwa autora wpisu"}
            id={"autor"}
          />
          <div className="photo">
            <label className="photo__label" htmlFor="photo">
              Dodaj grafikę
            </label>
            <input className="photo__input" type="file" id="photo" />
          </div>
          <div className="lead">
            <label className="lead__label" htmlFor="lead">
              Lead
            </label>
            <textarea
              className="lead__textfield"
              name=""
              id="lead"
              cols="30"
              rows="7"
            ></textarea>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default CreatePost;
