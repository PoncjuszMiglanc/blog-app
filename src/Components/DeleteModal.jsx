import PropTypes from 'prop-types';
import '../assets/scss/components/delete-modal.scss';

const DeleteModal = ({ setIsVisible, deleteFunc, txt }) => {
	return (
		<div className="modal">
			<div className="modal__window">
				<h3 className="modal__title">{`Usuwanie ${txt}`}</h3>
				<p className="modal__paragraph">
					{`Jesteś pewien, że chcesz usunąć ${txt}?`}
				</p>
				<div className="modal__btns">
					<button className="modal__btn" onClick={() => setIsVisible(false)}>
						Anuluj
					</button>
					<button className="modal__btn" onClick={deleteFunc}>
						Tak, usuń
					</button>
				</div>
			</div>
		</div>
	);
};

DeleteModal.propTypes = {
	setIsVisible: PropTypes.func.isRequired,
	deleteFunc: PropTypes.func.isRequired,
	txt: PropTypes.string.isRequired,
};

export default DeleteModal;
