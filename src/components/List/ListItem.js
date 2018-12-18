import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ className, children, active, onClick }) => (
  <div className={`list-item ${className || ""}`} onClick={onClick}>
    <span className={`list-indicator ${active ? "active" : ""}`} />
    {children}
  </div>
);

ListItem.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

export default ListItem;
