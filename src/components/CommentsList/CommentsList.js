import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import Input from "../Input";
import List from "../List";

import "./CommentsList.css";

const CommentsList = ({ active, comments }) =>
  active && (
    <List title={`Comments #${active ? active : ""}`}>
      {comments &&
        comments.value &&
        comments.value.map(item => (
          <List.Item className="comment-container" key={item.id}>
            <Icon color={item.avatar} />
            {item.text}
          </List.Item>
        ))}
      <List.Item className="new-comment-container">
        <Icon color="grey" />
        <Input textarea onChange={event => console.log(event.target.value)} />
      </List.Item>
    </List>
  );

CommentsList.propTypes = {
  active: PropTypes.number,
  comments: PropTypes.array
};

export default CommentsList;
