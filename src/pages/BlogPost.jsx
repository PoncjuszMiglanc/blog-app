import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAllPosts } from "../Hooks/PostsHooks";
import MainContainer from "../Components/MainContainer";
import PostMiniature from "../Components/PostMiniature";
import PostOptions from "../Components/PostOptions";
import "../assets/scss/pages/blog-post.scss";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const postList = useAllPosts();
  const otherPosts = postList.slice(0, 3);

  const getPost = () => {
    fetch(`http://localhost:8080/posts/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPost(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <MainContainer>
      <div className="blog-post">
        <div className="blog-post__head">
          <h1 className="blog-post__title">{!post ? "" : post.post.title}</h1>
          <p className="blog-post__category">
            {!post ? "" : post.post.category}
          </p>
          <div className="blog-post__meta">
            <span className="blog-post__author">
              <a href="">{!post ? "" : post.post.author}</a>
            </span>
            <span className="blog-post__separator"></span>
            <span className="blog-post__date">
              <a href="">
                <time
                  dateTime={
                    !post
                      ? ""
                      : new Date(post.post.createdAt).toLocaleDateString(
                          "en-GB"
                        )
                  }
                >
                  {!post
                    ? ""
                    : new Date(post.post.createdAt).toLocaleDateString(
                        "pl-PL",
                        {
                          month: "long",
                          year: "numeric",
                          day: "numeric",
                        }
                      )}
                </time>
              </a>
            </span>
          </div>
        </div>
        {!post ? (
          <p>Nie ma posta</p>
        ) : (
          <div className="blog-post__img">
            <img
              className="blog-post__pic"
              src={`http://localhost:8080/images/${post.post.image}`}
            />
          </div>
        )}
        <div className="blog-post__content">
          <div className="blog-post__lead">
            {/* <p>{!post ? "" : post.post.content}</p> */}
            {/* dla każdego h1,h2 w tym divie nieco osobne style w common */}
            {!post ? (
              ""
            ) : (
              <div dangerouslySetInnerHTML={{ __html: post.post.content }} />
            )}
          </div>
        </div>
      </div>
      <PostOptions />
      <div className="other-posts">
        <p className="other-posts__up">pozostałe posty</p>
        <div className="other-posts__wrapper">
          {otherPosts.map((item) => {
            return <PostMiniature key={item._id} item={item} />;
          })}
        </div>
        <p className="other-posts__down">więcej ...</p>
        {/* tu bedzie przycisk do strony ze wszystkimi postami */}
      </div>
    </MainContainer>
  );
};

export default BlogPost;
