import MainContainer from "../Components/MainContainer";

const DeleteUser = () => {
  return (
    <MainContainer>
      {/* może spróbuję napisać tę funkcję, która pokazuje hasło - click->setattribute-password-to-text */}
      <section className="delete-card">
        <h1 className="delete-card__title">Usuwanie Konta</h1>
        <p>Aby usunąć konto musisz podać swój login oraz hasło</p>
        <form>
          <div>
            <label htmlFor="username">Login</label>
            <input id="username" type="text" />
          </div>
          <div>
            <label htmlFor="password">Hasło</label>
            <input id="username" type="password" />
          </div>
        </form>
        <button>Anuluj</button>
        <button>Usuń</button>
      </section>
    </MainContainer>
  );
};

export default DeleteUser;
