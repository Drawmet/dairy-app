import React from "react";
import PropTypes from "prop-types";

const Input = ({ className, value, onChange }) => (
  <div className={`input-container ${className}`}>
    <input className="input" value={value} onChange={onChange} />
  </div>
);

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
