import { connect } from "react-redux";

import MainPage from "../components/MainPage";

import { getMenu, getCommentsById, getActive } from "../selectors";

import { updateActive } from "../store/actions";

const mapStateToProps = (state, ownProps) => ({
  menu: getMenu(state),
  active: getActive(state),
  comments: ownProps.active ? getCommentsById(state, ownProps.active) : []
});

const mapDispatchToProps = dispatch => ({
  updateActive: id => dispatch(updateActive(id)),
  deleteItem: id => dispatch(deleteItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
