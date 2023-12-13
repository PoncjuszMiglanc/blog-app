import "../assets/scss/components/cta-login.scss";
import pic from "../assets/pic1.jpg";

const CtaLogin = () => {
  return (
    <section className="cta" aria-label="call-to-action">
      <div className="cta__log-in">
        <div className="wrapper">
          <h2 className="cta__title">Załóż konto</h2>
          <p className="cta__paragraph">Publikuj swoje treści bez limitów</p>
        </div>
        <button className="cta__btn">Dołącz</button>
      </div>
      {/* <div className="cta__image">
      </div> */}
      <img className="cta__image" src={pic} alt="" />
    </section>
  );
};
export default CtaLogin;
