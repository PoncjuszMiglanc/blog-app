import "./main-post.scss";
import PostInfo from "./PostInfo";
import SecondaryPost from "./SecondaryPost";

const MainPost = () => {
  return (
    <>
      <main className="main-post">
        <h1 className="main-post__header">Tytuł całego bloga</h1>
        <p className="main-post__subheader">Podtytuł mojego bloga</p>
        <div className="main-post__view">
          <div className="main-post__picture">
            <PostInfo color={"rgb(236, 233, 233)"} padding={30} margin={1} />
          </div>
          <div className="main-post__list">
            <SecondaryPost />
            <SecondaryPost />
            <SecondaryPost />
            <SecondaryPost />
            <SecondaryPost />
            <SecondaryPost />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPost;
