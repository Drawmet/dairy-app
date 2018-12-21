import React from "react";
import PropTypes from "prop-types";
import { HotKeys } from "react-hotkeys";
import { compose, withState, withHandlers } from "recompose";

import constants from "../../constants";

import ColorSelect from "../ColorSelect";
import Icon from "../Icon";
import Input from "../Input";
import List from "../List";

import "./CommentsList.css";

const keyMap = {
  [constants.handlers.NEW_COMMENT]: "ctrl+enter"
};

const handlers = createComment => ({
  [constants.handlers.NEW_COMMENT]: () => createComment()
});

const handlersComponent = {
  handleOnChangeColor: ({ open, changeColorComment, changeOpen }) => color => {
    changeColorComment(color);

    changeOpen(!open);
  },
  handleOnClick: ({ open, changeOpen }) => event => {
    event.stopPropagation();

    changeOpen(!open);
  }
};

const CommentsList = ({
  active,
  color,
  comments,
  open,
  value,
  changeComment,
  createComment,
  handleOnClick,
  handleOnChangeColor
}) =>
  active && (
    <List title={`Comments #${active ? active : ""}`}>
      {comments &&
        comments.map(item => (
          <List.Item className="comment-container" key={item.id}>
            <Icon color={item.color} />
            {item.value}
          </List.Item>
        ))}
      <HotKeys keyMap={keyMap} handlers={handlers(createComment)}>
        <List.Item className="new-comment-container">
          <Icon color={color} label="click on me!" onClick={handleOnClick}>
            <ColorSelect open={open} onChange={handleOnChangeColor} />
          </Icon>
          <Input
            textarea
            value={value}
            onChange={event => changeComment(event.target.value)}
          />
        </List.Item>
      </HotKeys>
    </List>
  );

CommentsList.propTypes = {
  active: PropTypes.number,
  color: PropTypes.value,
  comments: PropTypes.array,
  value: PropTypes.string,
  open: PropTypes.bool,
  changeComment: PropTypes.func,
  changeColorComment: PropTypes.func,
  createComment: PropTypes.func,
  changeOpen: PropTypes.func,
  handleOnClick: PropTypes.func,
  handleOnChangeColor: PropTypes.func
};

export default compose(
  withState("open", "changeOpen", false),
  withHandlers(handlersComponent)
)(CommentsList);
