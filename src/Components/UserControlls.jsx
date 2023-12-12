import { Link } from "react-router-dom";
import "../assets/scss/components/user-controlls.scss";

const UserControlls = () => {
  const logOut = (e) => {
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
  };
  return (
    <div className="controlls">
      <Link to="/" onClick={logOut}>
        <button className="controlls__btn">Log Out</button>
      </Link>
      <Link to="/signin">
        <button className="controlls__btn">Log In</button>
      </Link>
      <Link to="/signup">
        <button className="controlls__btn controlls__btn--sign-up">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default UserControlls;
