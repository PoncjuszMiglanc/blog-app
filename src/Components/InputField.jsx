import "./input-field.scss";
import PropTypes from "prop-types";

const InputField = ({ label, placeholder, type, id, value, setValue }) => {
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
          onChange={(e) => setValue(e.target.value)}
          value={value}
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
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default InputField;
