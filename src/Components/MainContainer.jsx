import PropTypes from 'prop-types';
import '../assets/scss/components/main-container.scss';

const MainContainer = ({ children }) => {
	return (
		<>
			<main className="container">{children}</main>
		</>
	);
};

MainContainer.propTypes = {
	children: PropTypes.object,
};

export default MainContainer;
