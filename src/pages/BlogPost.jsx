import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAllPosts } from "../Hooks/PostsHooks";
import MainContainer from "../Components/MainContainer";
import PostMiniature from "../Components/PostMiniature";
import PostOptions from "../Components/PostOptions";
import PostInfo from "../Components/PostInfo";
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
        setPost(res.post);
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
          <h1 className="blog-post__title">{!post ? "" : post.title}</h1>
          <p className="blog-post__category">{!post ? "" : post.category}</p>
          <PostInfo item={post} style={"black"} />
        </div>
        {!post ? (
          <p>Nie ma posta</p>
        ) : (
          <div className="blog-post__img">
            <img
              className="blog-post__pic"
              src={`http://localhost:8080/images/${post.image}`}
            />
          </div>
        )}
        <div className="blog-post__content">
          <div className="blog-post__lead">
            {!post ? (
              ""
            ) : (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            )}
          </div>
        </div>
      </div>
      <PostOptions postId={post ? post._id : ""} />
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
