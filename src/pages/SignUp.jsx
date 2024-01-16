import { useState } from "react";
import MainContainer from "../Components/MainContainer";
import FormCard from "../Components/FormCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const sendData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/register", {
        userName,
        email,
        password,
      });

      if (response.status >= 200 && response.status < 300) {
        console.log("wszystko ok, zarejestrowano", response.status);
        navigate("/");
      } else {
        console.log("wystąpił błąd :", response.status);
      }
    } catch (error) {
      console.log(`wystąpił błąd podczas rejestracji ${error}`);
    }

    setUserName("");
    setEmail("");
    setPassword("");
  };

  const items = [
    {
      label: "Nazwa użytkownika",
      placeholder: "Podaj nazwę użytkownika",
      type: "text",
      id: "username",
      setValue: setUserName,
      value: userName,
    },
    {
      label: "Email",
      placeholder: "Podaj adres email",
      type: "text",
      id: "email",
      setValue: setEmail,
      value: email,
    },
    {
      label: "Hasło",
      placeholder: "Podaj hasło",
      type: "password",
      id: "pass",
      setValue: setPassword,
      value: password,
    },
  ];

  const cardText = {
    head: "Rejestracja",
    sub: "Cieszymy się, że chcesz do nas dołączyć. Wyślij formularz kontaktowy i zacznij publikować własne posty.",
    btn: "Zarejestruj",
    cta: "Posiadasz już konto?",
    invitation: "Zaloguj się!",
    link: "/signin",
    sendData: sendData,
  };

  return (
    <MainContainer>
      <FormCard items={items} cardText={cardText} />
    </MainContainer>
  );
};

export default SignUp;
