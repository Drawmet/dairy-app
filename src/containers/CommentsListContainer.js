import { connect } from "react-redux";

import CommentsList from "../components/CommentsList";

import { getCommentsById, getActive } from "../selectors";

import { updateCommentsById } from "../store/actions";

const mapStateToProps = state => ({
  active: getActive(state),
  comments: getActive(state) ? getCommentsById(state, getActive(state)) : []
});

const mapDispatchToProps = dispatch => ({
  updateCommentsById: id => dispatch(updateCommentsById(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);
