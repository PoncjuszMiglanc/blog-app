import "../assets/scss/pages/edit-profile.scss";
import MainContainer from "../Components/MainContainer";
import { useAuth } from "../Hooks/AuthHooks";
import axios from "axios";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  // const { userData, getUserData } = useAuth();
  const { userData } = useAuth();
  const [{ username, email, password, about }, setInputData] = useState({});
  const [image, setImage] = useState("");

  // const navigate = useNavigate();

  useEffect(() => {
    setInputData({
      username: userData.username,
      email: userData.email,
      password: "",
      about: userData.about,
    });
  }, []);
  //potem pomyślimy o tym, żeby id było w ścieżce i żeby z niej je brać

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevVal) => ({ ...prevVal, [name]: value }));
  };

  const updateUserData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("about", about);
    if (image) {
      formData.append("image", image);
    }

    // formData.forEach((val, key) => {
    //   console.log(key, val);
    // });
    try {
      const response = await axios.put(
        `http://localhost:8080/user/update/${userData._id}`,
        formData
      );

      if (response.status >= 200 && response.status < 300) {
        // getUserData(response.data.userId);
        // navigate(`/profile/${response.data.userId}`)

        console.log("Udało się zaktualizować użytkownika", response.data);
      } else {
        console.log("nie udało się zaktualizować użykownika");
      }
    } catch (err) {
      console.log("jakiś błąd", err);
    }
  };
  return (
    <MainContainer>
      <section className="edit-card">
        <h1 onClick={() => console.log(image)} className="edit-card__title">
          Edycja profilu
        </h1>
        <button onClick={updateUserData}>TEST DATA</button>
        <form>
          {/* możliwe, że formem bd wysyłał, i że atrybuty name w inputach do czegoś sie przydadzą */}
          <div className="edit-card__form">
            <label className="edit-card__label" htmlFor="">
              Login
            </label>
            <input
              className="edit-card__input"
              type="text"
              name="username"
              placeholder="podaj nowy login"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="edit-card__form">
            <label className="edit-card__label" htmlFor="">
              Email
            </label>
            <input
              className="edit-card__input"
              type="email"
              name="email"
              placeholder="podaj nowy adres email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="edit-card__form">
            <label className="edit-card__label" htmlFor="">
              Hasło
            </label>
            <input
              className="edit-card__input"
              name="password"
              type="password"
              placeholder="podaj nowe hasło"
              onChange={handleChange}
            />
          </div>
          <div className="edit-card__form">
            <label className="edit-card__label" htmlFor="image">
              Zdjęcie profilowe
            </label>
            <input
              className="edit-card__file"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              name="image"
              id="image"
            />
          </div>
          <div className="edit-card__form">
            <label className="edit-card__label" htmlFor="">
              Kilka słów o sobie
            </label>
            <textarea
              className="edit-card__textarea"
              rows="8"
              name="about"
              value={about}
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
        <button className="edit-card__btn">Anuluj</button>
        <button
          onClick={() => console.log(userData)}
          className="edit-card__btn"
        >
          Wyślij
        </button>
      </section>
    </MainContainer>
  );
};

export default EditProfile;
