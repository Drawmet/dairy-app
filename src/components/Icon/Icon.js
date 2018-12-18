import React from "react";
import PropTypes from "prop-types";

import "./Icon.css";

const Icon = ({ color }) => <span className={`icon ${color}`} />;

Icon.propTypes = {
  color: PropTypes.string
};

export default Icon;
