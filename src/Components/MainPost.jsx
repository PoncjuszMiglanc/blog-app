import { useState } from "react";
import "./main-post.scss";
import PostInfo from "./PostInfo";
import SecondaryPost from "./SecondaryPost";

const MainPost = () => {
  //albo wyciągam z tablicy pierwszy i wrzucam do osobnej zmiennej
  //albo w pętli biorę po dacie najnowszy post i wrzucam mu inny styl, co wymaga byc moze przefeniniowania logiki komponentu
  //albo wszystko bedzie w gridzie, i w zależności od szerokości elementu, będzie on miał ten komponent z info w innym miejscu
  //czyli nie użyję tagu img tylko w cssie będzie on tłem i wtedy łatwiej implementować ten info na tle obrazka
  const [postList, setPostList] = useState([]);

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
        <div className="main-post__view">
          <div className="main-post__picture">
            <PostInfo color={"rgb(236, 233, 233)"} padding={30} margin={1} />
          </div>
          <button onClick={getPostList}>X</button>
          <button onClick={() => console.log("a to są posty", postList)}>
            Y
          </button>
          <div className="main-post__list">
            {postList == null
              ? ""
              : postList.map((post) => {
                  return (
                    <div key={Math.random()}>
                      <h1>{post.title}</h1>
                      <p>{post.category}</p>
                      <p>{post.title}</p>
                      <img
                        src={`http://localhost:8080/images/${post.image}`}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                  );
                })}

            {/* <SecondaryPost />
            <SecondaryPost />
            <SecondaryPost />
            <SecondaryPost />
            <SecondaryPost />
            <SecondaryPost />
            <SecondaryPost /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPost;
