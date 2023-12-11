import "../assets/scss/components/small-post-card.scss";
import pic from "../assets/pic1.jpg";

const SmallPostCard = () => {
  return (
    <div className="item">
      <img className="item__image" src={pic} alt="thumbnail" />
      <div className="item__text">
        <span className="item__category">Recenzja</span>
        <h4 className="item__title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quam
          adipisci
        </h4>
      </div>
    </div>
  );
};

export default SmallPostCard;
