import React from "react";
import PropTypes from "prop-types";

import "./Icon.css";

const Icon = ({ color, children, onClick }) => (
  <span className={`icon ${color}`} onClick={onClick}>
    {children}
  </span>
);

Icon.propTypes = {
  color: PropTypes.string,
  children: PropTypes.element,
  onCLick: PropTypes.func
};

export default Icon;
