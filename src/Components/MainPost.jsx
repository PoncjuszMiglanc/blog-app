import { useState } from "react";
import "./main-post.scss";
import PostInfo from "./PostInfo";
import SecondaryPost from "./SecondaryPost";

const MainPost = () => {
  const [postList, setPostList] = useState([]);
  //tu jest prawdopodobnie błąd z eslintem, ktory rząda od dependencies array zmiennej ze stanu, ktorej nie chcę podawać do useeffecta
  const getPostList = () => {
    fetch("http://localhost:8080/posts")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPostList(res.posty.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <main className="main-post">
        <h1 className="main-post__header">Tytuł całego bloga</h1>
        <p className="main-post__subheader">Podtytuł mojego bloga</p>
        <button onClick={getPostList}>X</button>
        <button onClick={() => console.log("a to są posty", postList)}>
          Y
        </button>
        <div className="main-post__view">
          <div className="main-post__list">
            {postList == null
              ? ""
              : postList.map((post, index) => {
                  if (index == 0) {
                    return (
                      <div
                        key={index}
                        className="main-post__picture"
                        style={{
                          backgroundImage: `url("http://localhost:8080/images/${post.image}")`,
                        }}
                      >
                        <PostInfo
                          color={"rgb(236, 233, 233)"}
                          padding={30}
                          margin={1}
                          post={post}
                        />
                      </div>
                    );
                  }
                  return <SecondaryPost key={post._id} post={post} />;
                })}
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPost;
