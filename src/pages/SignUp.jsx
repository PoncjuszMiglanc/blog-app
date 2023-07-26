import FormCard from "../Components/FormCard";
import MainContainer from "../Components/MainContainer";

const SignUp = () => {
  const items = [
    {
      label: "Nazwa użytkownika",
      placeholder: "Podaj nazwę użytkownika",
      type: "text",
      id: "username",
    },
    {
      label: "Email",
      placeholder: "Podaj adres email",
      type: "text",
      id: "email",
    },
    { label: "Hasło", placeholder: "Podaj hasło", type: "text", id: "pass" },
  ];

  const cardText = {
    head: "Rejestracja",
    sub: "Cieszymy się, że chcesz do nas dołączyć. Wyślij formularz kontaktowy i zacznij publikować własne posty:)",
    btn: "Zarejestruj",
    cta: "Posiadasz już konto?",
    invitation: "Zaloguj się!",
    link: "/signin",
  };

  return (
    <>
      {/* <FormCard /> */}
      <MainContainer>
        <FormCard items={items} cardText={cardText} />
      </MainContainer>
    </>
  );
};

export default SignUp;
