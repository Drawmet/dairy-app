import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

const Button = ({ className, label, onClick }) => (
  <button className={`btn ${className || ""}`} onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
