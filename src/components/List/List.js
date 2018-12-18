import React from "react";
import PropTypes from "prop-types";

import Title from "../Title";

import "./List.css";

const List = ({ title, header, children, className }) => (
  <div className="list-container">
    <div className={`list ${className || ""}`}>
      <Title className="list-title">{title}</Title>
      {header && header}
      <div className="list-item-container">{children}</div>
    </div>
  </div>
);

List.propTypes = {
  title: PropTypes.string,
  header: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string
};

export default List;
