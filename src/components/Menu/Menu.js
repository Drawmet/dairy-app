import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import Badge from "../Badge";
import Input from "../Input";
import List from "../List";

const handleOnDelete = (onDelete, id) => event => {
  event.stopPropagation();
  onDelete(id);
};

const Menu = ({
  menu,
  value,
  active,
  createItem,
  deleteItem,
  updateActive,
  updateNameItem
}) => (
  <List
    title={"Items"}
    header={
      <div className={"header-items-list"}>
        <Input
          className="header-input"
          value={value}
          placeholder="Type name here..."
          onChange={event => updateNameItem(event.target.value)}
        />
        <Button
          className="btn-success header-button"
          label="Add New"
          onClick={createItem}
        />
      </div>
    }
  >
    {menu.map(item => (
      <List.Item
        key={item.value}
        active={item.id === active}
        onClick={() => updateActive(item.id)}
      >
        {item.value}
        <Badge className="success-background" value={item.comments_number} />
        <Button
          className="btn-danger outline"
          label={"Delete"}
          onClick={handleOnDelete(deleteItem, item.id)}
        />
      </List.Item>
    ))}
  </List>
);

Menu.propTypes = {
  menu: PropTypes.array,
  value: PropTypes.string,
  createItem: PropTypes.func,
  deleteItem: PropTypes.func,
  updateActive: PropTypes.func,
  updateNameItem: PropTypes.func
};

export default Menu;
