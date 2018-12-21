import { connect } from "react-redux";

import CommentsList from "../components/CommentsList";

import {
  getActive,
  getCommentsById,
  getCommentValue,
  getColorComment
} from "../selectors";

import {
  changeColorComment,
  changeComment,
  createComment
} from "../store/actions";

const mapStateToProps = state => ({
  active: getActive(state),
  comments: getActive(state) ? getCommentsById(state, getActive(state)) : [],
  value: getCommentValue(state),
  color: getColorComment(state)
});

const mapDispatchToProps = dispatch => ({
  changeComment: value => dispatch(changeComment(value)),
  changeColorComment: color => dispatch(changeColorComment(color)),
  createComment: () => dispatch(createComment())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);
