import MainContainer from "../Components/MainContainer";
import { useAllPosts } from "../Hooks/PostsHooks";
import "../assets/scss/pages/profile-page.scss";
import pic from "../assets/pic2.webp";
import Mini from "../Components/Mini";

const ProfilePage = () => {
  const postList = useAllPosts();
  // ostatecznie będzie trzeba przefiltrowac tylko posty wg. autora, który jest zalogowany

  return (
    <MainContainer>
      <div className="profile">
        <aside className="profile__card">
          <div className="profile__card-wrapper">
            <div className="profile__card-topbar">
              <div className="profile__image">
                <img className="profile__avatar" src={pic} alt="author" />
              </div>
            </div>
            <h1 className="profile__owner">{postList[0].author}</h1>
            <span className="profile__status">członek od 12.11.2022</span>
            <span className="profile__about">o mnie</span>
            <p className="profile__info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              ullam sunt suscipit repellat voluptatem nostrum cupiditate culpa
              necessitatibus, consectetur delectus! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ex, porro magnam? Iure animi ipsum
              ad facilis? Laborum, minus vel quia provident quibusdam, eligendi
              totam natus architecto laboriosam, nam fugit.
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
