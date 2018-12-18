import React from "react";
import PropTypes from "prop-types";

import "./Page.css";

const Page = ({ className, children }) => (
  <div className={`page ${className || ""}`}>{children}</div>
);

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Page;
