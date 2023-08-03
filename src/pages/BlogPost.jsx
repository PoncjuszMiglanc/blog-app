// import { useParams } from "react-router-dom";
import MainContainer from "../Components/MainContainer";
import "./blog-post.scss";

const BlogPost = () => {
  // const { id } = useParams();
  return (
    <>
      <MainContainer>
        <div className="post">
          <div className="post__head">
            <p className="post__category">Recenzja</p>
            <h1 className="post__title">Tytuł recenzji filmu</h1>
            <div className="post__meta">
              <span className="post__author">
                <a href="">Jan Kowalski</a>
              </span>
              <span className="post__separator"></span>
              <span className="post__date">
                <a href="">
                  <time dateTime="25.07.2023">27 Lipca 2023</time>
                </a>
              </span>
            </div>
          </div>
          <div className="post__img"></div>
          <div className="post__content">
            <div className="post__lead">
              <p>
                <strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores voluptate provident nihil natus voluptatem eos
                  commodi minima cumque similique possimus. Lorem ipsum dolor
                  si.
                </strong>
              </p>
              <br />
              <p>
                <strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores voluptate provident nihil natus voluptatem eos
                  commodi minima cumque similique possimus. Lorem ipsum dolor
                  si.
                </strong>
              </p>
            </div>
            <div className="post__divider">***</div>
            <div className="post__text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                quis veritatis asperiores, adipisci unde perspiciatis sed
                debitis ratione vero distinctio harum a nam natus facere illo
                corporis! Ipsam, deleniti? Nulla.
              </p>
              <br />

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officia quia, earum error doloremque veritatis labore, nesciunt
                delectus quod totam facere numquam harum quam aliquam distinctio
                fuga facilis fugit magnam vero doloribus accusantium nostrum
                rem, deleniti tenetur! Vel, quos, assumenda provident,
                dignissimos incidunt ab impedit accusantium id veritatis aliquam
                numquam in!
              </p>
              <ul>
                <li>sdasd</li>
                <li>asdas</li>
                <li>asdasd</li>
                <li>asdsd</li>
                <li>asdasd</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                vero repellat voluptates, odio, nobis quasi sint ut veritatis
                iste dolore assumenda officia similique totam repellendus odit
                pariatur deleniti cum natus facilis. Perferendis, architecto
                asperiores doloremque nisi necessitatibus cumque autem ipsam
                molestiae. Officia sed quas necessitatibus adipisci laudantium
                illum maxime veritatis fugiat, laborum voluptas impedit
                obcaecati blanditiis ut laboriosam inventore praesentium!
              </p>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default BlogPost;
