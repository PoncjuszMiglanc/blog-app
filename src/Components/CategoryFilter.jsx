import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/scss/components/category-filter.scss";

const CategoryFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="category-filter">
      <span className="category-filter__bar" onClick={() => setIsOpen(!isOpen)}>
        <a href="#" className="category-filter__title">
          Sortuj według kategorii
        </a>
        <FontAwesomeIcon
          className={`category-filter__icon ${isOpen ? "rotate" : ""}`}
          icon="angle-down"
        />
      </span>
      {isOpen ? (
        <div className="category-filter__dropdown">
          <ul>
            <li>Recenzja</li>
            <li>Artykuł</li>
            <li>Esej</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default CategoryFilter;
