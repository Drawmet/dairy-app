import React from "react";
import PropTypes from "prop-types";

const ListItem = (className, children) => (
  <div className={`list-item ${className || ""}`}>{children}</div>
);

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default ListItem;
