import PropTypes from "prop-types";
import "./main-container.scss";

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
