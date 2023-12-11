import "../assets/scss/components/the-subscribe.scss";

const TheSubscribe = () => {
  return (
    <form className="subscribe">
      <label className="subscribe__label" htmlFor="subscribe">
        Subskrybuj nasz blog
      </label>
      <div className="subscribe__control">
        <input className="subscribe__input" type="text" id="subscribe" />
        <button className="subscribe__btn">Subskrybuj</button>
      </div>
    </form>
  );
};

export default TheSubscribe;
