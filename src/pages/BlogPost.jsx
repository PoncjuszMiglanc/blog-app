import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  return (
    <>
      <h1>BlogPost {id}</h1>
    </>
  );
};

export default BlogPost;
