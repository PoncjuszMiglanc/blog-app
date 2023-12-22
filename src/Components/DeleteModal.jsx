import PropTypes from "prop-types";
import "../assets/scss/components/delete-modal.scss";

const DeleteModal = ({ setIsVisible, deletePost }) => {
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
  deletePost: PropTypes.func.isRequired,
};

export default DeleteModal;
