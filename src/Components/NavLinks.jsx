import { Link } from "react-router-dom";
import "../assets/scss/components/nav-links.scss";

const NavLinks = () => {
  const links = [
    { anhor: "About", path: "#" },
    { anhor: "Kontakt", path: "#" },
    // { anhor: "Coś", path: "#" },
    { anhor: "Kategorie", path: "#" },
    // { anhor: "Post", path: "posts/1" },
    // { anhor: "Nowy", path: "/posts/create" },
    // { anhor: "Bamba", path: "#" },
  ];

  return (
    <nav>
      <ul>
        {links.map((item, idx) => {
          return (
            <li className="header__list-item" key={idx}>
              <Link to={item.path}>{item.anhor}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
