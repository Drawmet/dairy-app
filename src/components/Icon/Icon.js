import React from "react";
import PropTypes from "prop-types";

import "./Icon.css";

const Icon = ({ label, color, children, onClick }) => (
  <span className={`icon ${color}`} onClick={onClick}>
    {label ? label : ""}
    {children}
  </span>
);

Icon.propTypes = {
  color: PropTypes.string,
  children: PropTypes.element,
  label: PropTypes.string,
  onClick: PropTypes.func
};

export default Icon;
