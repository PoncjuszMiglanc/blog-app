import "../assets/scss/components/delete-modal.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const DeleteModal = ({ setIsVisible }) => {
  const navigate = useNavigate();

  const deletePost = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/deletepost", {
      method: "DELETE",
      // body: post._id
    });
    navigate("/");
  };

  return (
    <div className="modal">
      <div className="modal__window">
        <h3 className="modal__title">Usuwanie posta</h3>
        <p className="modal__paragraph">
          Jesteś pewien, że chcesz usunąć posta?
        </p>
        <div className="modal__btns">
          <button className="modal__btn" onClick={() => setIsVisible(false)}>
            Anuluj
          </button>
          <button className="modal__btn" onClick={deletePost}>
            Tak, usuń
          </button>
        </div>
      </div>
    </div>
  );
};

DeleteModal.propTypes = {
  setIsVisible: PropTypes.func.isRequired,
};

export default DeleteModal;
