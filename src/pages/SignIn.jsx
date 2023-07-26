import FormCard from "../Components/FormCard";
import MainContainer from "../Components/MainContainer";

const SignIn = () => {
  const items = [
    {
      label: "Email",
      placeholder: "Podaj adres email",
      type: "text",
      id: "email",
    },
    { label: "Hasło", placeholder: "Podaj hasło", type: "text", id: "pass" },
  ];

  const cardText = {
    head: "Logowanie",
    sub: "Cieszymy się, że wróciłeś. Zapraszamy do ponownego zalogowania :)",
    btn: "Zaloguj",
    cta: "Nie masz jeszcze konta?",
    invitation: "Załóż konto za darmo!",
    link: "/signup",
  };
  //tytul podtytul i na kocnu
  return (
    <>
      <MainContainer>
        <FormCard items={items} cardText={cardText} />
      </MainContainer>
    </>
  );
};

export default SignIn;
