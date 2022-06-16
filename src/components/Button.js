import PropTypes from "prop-types";

const Button = ({ color, text, onclick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onclick}
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  color: "steelBlue",
};
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
