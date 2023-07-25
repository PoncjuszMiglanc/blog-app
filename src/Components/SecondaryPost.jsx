import "./secondary-post.scss";
import PostInfo from "./PostInfo";

const SecondaryPost = () => {
  return (
    <>
      <div className="post">
        {/* <img src="../assets/pic1.jpg" alt="pic" /> */}
        <div className="image"></div>
        <PostInfo color={"rgb(17, 16, 30)"} padding={0} margin={0.8} />
      </div>
    </>
  );
};

export default SecondaryPost;
