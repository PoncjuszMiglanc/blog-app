import PropTypes from 'prop-types';
import '../assets/scss/components/main-container.scss';

const MainContainer = ({ children }) => {
	return (
		<>
			<div className="main-container">{children}</div>
		</>
	);
};

MainContainer.propTypes = {
	children: PropTypes.object,
};

export default MainContainer;
