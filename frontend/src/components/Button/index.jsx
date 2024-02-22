import PropTypes from "prop-types";
import "./index.css";

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="custom-button">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
