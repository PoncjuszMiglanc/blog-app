import "./input-field.scss";
import PropTypes from "prop-types";

const InputField = ({ label, placeholder, type, id }) => {
  return (
    <>
      <div className="input">
        <label className="input__label" htmlFor={id}>
          {label}
        </label>
        <input
          className="input__field"
          id={id}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
};

export default InputField;

//for i id będą w propsie

//label, placeholder i id
