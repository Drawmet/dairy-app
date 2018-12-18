import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

const Input = ({ className, placeholder, textarea, value, onChange }) => (
  <div className={`input-container ${className || ""}`}>
    {textarea ? (
      <textarea
        className="input"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
      />
    ) : (
      <input
        className="input"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
      />
    )}
  </div>
);

Input.propTypes = {
  className: PropTypes.string,
  textarea: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
