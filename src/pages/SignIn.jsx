import { useState } from "react";
import { useAuth } from "../Hooks/AuthHooks";
import MainContainer from "../Components/MainContainer";
import FormCard from "../Components/FormCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { isLoggedIn, logIn } = useAuth();
  //tutaj podrzucić jeszcze userId dla linka w nawigacji

  const navigate = useNavigate();

  const handler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        { email, pass },
        { withCredentials: true }
      );

      if (response.status === 200) {
        logIn();
        navigate(`/profile/${response.data.userId}`);
        console.log("zalogowano", response.data.userId);
      } else {
        console.log("wystąpił błąd", response.data);
      }
    } catch (error) {
      console.log("nie udało się zalogować", error);
    }

    setEmail("");
    setPass("");
  };

  const items = [
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
      setValue: setPass,
      value: pass,
    },
  ];

  const cardText = {
    head: "Logowanie",
    sub: "Cieszymy się, że wróciłeś. Zapraszamy do ponownego zalogowania :)",
    btn: "Zaloguj",
    cta: "Nie masz jeszcze konta?",
    invitation: "Załóż konto za darmo!",
    link: "/signup",
    sendData: handler,
  };

  return (
    <MainContainer>
      <button onClick={() => console.log(isLoggedIn)}>TESt</button>
      <FormCard items={items} cardText={cardText} />
    </MainContainer>
  );
};

export default SignIn;
