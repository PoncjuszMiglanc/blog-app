import MainContainer from "../Components/MainContainer";
import { useAllPosts } from "../Hooks/PostsHooks";
import "../assets/scss/pages/profile-page.scss";
import pic from "../assets/pic2.webp";
import Mini from "../Components/Mini";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";
import { useAuth } from "../Hooks/AuthHooks";

const ProfilePage = () => {
  const postList = useAllPosts();
  // ostatecznie będzie trzeba przefiltrowac tylko posty wg. autora, który jest zalogowany
  // const [userData, setUserData] = useState("");
  const { userData } = useAuth();

  // const { id } = useParams();
  //request po dane uzytkownika

  // useEffect(() => {
  //   const getUserData = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8080/user/${id}`);
  //       if (response.status >= 200 && response.status < 300) {
  //         const { userData } = response.data;
  //         setUserData(userData);
  //       } else {
  //         console.log("Wystąpił błąd podczas pobierania danych użytkownika");
  //       }
  //     } catch (err) {
  //       console.log("wystąpił błąd podczas pobierania danych użytkownika", err);
  //     }
  //   };
  //   getUserData();
  // }, []);

  return (
    <MainContainer>
      <div className="profile">
        <aside className="profile__card">
          <div className="profile__card-wrapper">
            <div className="profile__card-topbar">
              <button onClick={() => console.log(userData.createdAt)}>
                TEST
              </button>
              <div className="profile__image">
                <img className="profile__avatar" src={pic} alt="author" />
              </div>
            </div>
            <h1 className="profile__owner">
              {!userData ? "Nazwa Użytkownika" : userData.username}
            </h1>
            <span className="profile__status">{`członek od ${
              !userData
                ? ""
                : new Date(userData.createdAt).toLocaleDateString("pl-PL", {
                    month: "numeric",
                    year: "numeric",
                    day: "numeric",
                  })
            }`}</span>
            <span
              onClick={() => console.log(userData)}
              className="profile__about"
            >
              o mnie
            </span>
            <p className="profile__info">
              {!userData.about
                ? `Użytkownik ${userData.username} nie napisał jeszcze nic o sobie. By to zmienić edytuj profil.`
                : userData.about}
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              ullam sunt suscipit repellat voluptatem nostrum cupiditate culpa
              necessitatibus, consectetur delectus! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ex, porro magnam? Iure animi ipsum
              ad facilis? Laborum, minus vel quia provident quibusdam, eligendi
              totam natus architecto laboriosam, nam fugit. */}
            </p>
          </div>
        </aside>
        <section className="profile__summary">
          <h2 className="profile__header">moje teksty</h2>
          <div className="profile__categories">
            <a className="profile__category" href="">
              recenzje (12)
            </a>
            <a className="profile__category" href="">
              artykuły (5)
            </a>
            <a className="profile__category" href="">
              eseje (2)
            </a>
          </div>
        </section>
        <section className="profile__posts">
          {!postList
            ? ""
            : postList.map((item) => {
                return <Mini key={item._id} item={item} />;
              })}
          {/* <article className="element">element</article>
          <article className="element">element</article>
          <article className="element">element</article>
          <article className="element">element</article>
          <article className="element">element</article>
          <article className="element">element</article>
          <article className="element">element</article>
          <article className="element">element</article>
          <article className="element">element</article>
          <article className="element">element</article>
          <article className="element">element</article>
          <article className="element">element</article>
          <article className="element">element</article>
          <article className="element">element</article>
          <article className="element">element</article>
          <article className="element">element</article>
          <article className="element">element</article>
          <article className="element">element</article> */}
        </section>
      </div>
    </MainContainer>
  );
};

export default ProfilePage;
