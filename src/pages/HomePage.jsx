import { useState, useEffect } from "react";
import MainContainer from "../Components/MainContainer";
import PostCard from "../Components/PostCard";
import CategoryFilter from "../Components/CategoryFilter";
import TheSubscribe from "../Components/TheSubscribe";
import MostPopular from "../Components/MostPopular";
import TheSocials from "../Components/TheSocials";
import "../assets/scss/pages/home-page.scss";

const HomePage = () => {
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

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <MainContainer>
      <section className="grid">
        <div className="grid__heading heading">
          <h1 className="grid__title" onClick={() => console.log(postList)}>
            Filmowy blog
          </h1>
          <p className="grid__subtitle">
            Teksty najlepszych krytyków codziennie
          </p>
        </div>
        <aside className="grid__sidebar sidebar">
          <CategoryFilter />
          <TheSubscribe />
          <MostPopular />
        </aside>
        {postList == null
          ? ""
          : postList.map((post, index) => {
              if (index == 0) {
                return (
                  <PostCard
                    key={post._id}
                    post={post}
                    style={{ gridColumn: "span 2", gridRow: "2 / span 2" }}
                    imgsize={400}
                  />
                );
              } else {
                return <PostCard key={post._id} post={post} />;
              }
            })}
      </section>
      <TheSocials />
    </MainContainer>
  );
};

export default HomePage;
