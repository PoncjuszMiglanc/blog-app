import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/AuthHooks";
import "../assets/scss/components/user-controlls.scss";

const UserControlls = () => {
  const { isLoggedIn, logOut } = useAuth();

  const navigate = useNavigate();

  const logOutHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("to jest respons", res);
      })
      .catch((err) => {
        console.log(err);
      });

    logOut();
    navigate("/logout");
  };
  return (
    <div className="controlls">
      {isLoggedIn ? (
        <Link to="/" onClick={logOutHandler}>
          <button className="controlls__btn">Wyloguj się</button>
        </Link>
      ) : (
        <Link to="/signin">
          <button className="controlls__btn">Zaloguj się</button>
        </Link>
      )}
      <Link to="/signup">
        <button className="controlls__btn controlls__btn--sign-up">
          Załóż konto
        </button>
      </Link>
    </div>
  );
};

export default UserControlls;
