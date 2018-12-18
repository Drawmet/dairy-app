import React from "react";
import PropTypes from "prop-types";

import "./Badge.css";

const Badge = ({ className, value }) => (
  <div className={`badge-container ${className}`}>
    <span className="badge">{value}</span>
  </div>
);

Badge.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number
};

export default Badge;
