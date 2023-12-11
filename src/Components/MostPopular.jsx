import { useState } from "react";
import SmallPostCard from "./SmallPostCard";
import "../assets/scss/components/most-popular.scss";

const MostPopular = () => {
  const [items, setItems] = useState([1, 2, 3]);

  return (
    <div className="popular">
      <h3 className="popular__title" onClick={setItems}>
        Najbardziej popularne
      </h3>
      {items.map((item) => {
        return <SmallPostCard key={item} />;
      })}
    </div>
  );
};

export default MostPopular;
