// import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Input = ({ id, label, ...props }) => {
  return (
    <div className="custom-input-container">
      <label htmlFor={id}>{label}</label>
      <input className="custom-input" {...props} id={id} placeholder={label} />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
