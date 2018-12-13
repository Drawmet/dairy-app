import React from "react";
import PropTypes from "prop-types";

import "./SubTitle.css";

const SubTitle = ({ className, children }) => (
  <span className={`subtitle ${className || ""}`}>{children}</span>
);

SubTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default SubTitle;
