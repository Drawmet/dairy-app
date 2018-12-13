import React from "react";
import PropTypes from "prop-types";

import "./Title.css";

const Title = ({ className, children }) => (
  <span className={`title ${className || ""}`}>{children}</span>
);

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Title;
