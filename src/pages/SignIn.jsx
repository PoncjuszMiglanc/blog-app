// import FormCard from "../Components/FormCard";
import InputField from "../Components/InputField";
import MainContainer from "../Components/MainContainer";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  //redirectem trzba będzie się zająć
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handler = (e) => {
    e.preventDefault();
    console.log(email, pass);
    fetch("http://localhost:8080/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        pass,
      }),
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

    setEmail("");
    setPass("");
  };
  //tu jest podejście z mniejszą liczbą komponentów
  return (
    <>
      <MainContainer>
        {/* <FormCard items={items} cardText={cardText} /> */}
        <div className="card">
          <div className="card__form">
            <h1 className="card__header">Logowanie</h1>
            <p className="card__sub">
              Cieszymy się, że wróciłeś. Zapraszamy do ponownego zalogowania :)
            </p>
            <form action="">
              <InputField
                key="email"
                label={"Email"}
                placeholder={"Podaj adres email"}
                type={"text"}
                id={"email"}
                value={email}
                setValue={setEmail}
              />
              <InputField
                key="pass"
                label={"Hasło"}
                placeholder={"Podaj hasło"}
                type={"text"}
                id={"pass"}
                value={pass}
                setValue={setPass}
              />
              <button onClick={handler} className="card__btn">
                Zaloguj
              </button>
            </form>

            <div className="card__divider">lub</div>
            <p className="card__sub">
              Nie masz jeszcze konta?
              <span className="card__sub-login">
                <Link to="/signup">Załóż konto za darmo!</Link>
              </span>
            </p>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default SignIn;

// const items = [
//   {
//     label: "Email",
//     placeholder: "Podaj adres email",
//     type: "text",
//     id: "email",
//   },
//   { label: "Hasło", placeholder: "Podaj hasło", type: "text", id: "pass" },
// ];
// const cardText = {
//   head: "Logowanie",
//   sub: "Cieszymy się, że wróciłeś. Zapraszamy do ponownego zalogowania :)",
//   btn: "Zaloguj",
//   cta: "Nie masz jeszcze konta?",
//   invitation: "Załóż konto za darmo!",
//   link: "/signup",
// };
