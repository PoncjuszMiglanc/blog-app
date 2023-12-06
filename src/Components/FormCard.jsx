// import "./form-card.scss";
import '../assets/scss/components/form-card.scss';
import { Link } from 'react-router-dom';
import InputField from './InputField';
import PropTypes from 'prop-types';

const FormCard = ({ items, cardText }) => {
	return (
		<>
			<div className="card">
				<div className="card__form">
					<h1 className="card__header">{cardText.head}</h1>
					<p className="card__sub">{cardText.sub}</p>
					<form action="">
						{items.map((item) => {
							return (
								<InputField
									key={item.id}
									label={item.label}
									placeholder={item.placeholder}
									type={item.type}
									id={item.id}
									setValue={item.setValue}
									value={item.value}
								/>
							);
						})}
						<button onClick={cardText.sendData} className="card__btn">
							{cardText.btn}
						</button>
					</form>

					<div className="card__divider">lub</div>
					<p className="card__sub">
						{cardText.cta}
						<span className="card__sub-login">
							<Link to={cardText.link}>{cardText.invitation}</Link>
						</span>
					</p>
				</div>
			</div>
		</>
	);
};

FormCard.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
	cardText: PropTypes.object,
};

export default FormCard;
