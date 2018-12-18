import { connect } from "react-redux";

import Menu from "../components/Menu";

import { getMenu, getActive, getMenuValue } from "../selectors";

import {
  createItem,
  deleteItem,
  updateActive,
  updateNameItem
} from "../store/actions";

const mapStateToProps = state => ({
  menu: getMenu(state),
  active: getActive(state),
  value: getMenuValue(state)
});

const mapDispatchToProps = dispatch => ({
  createItem: () => dispatch(createItem()),
  updateActive: id => dispatch(updateActive(id)),
  deleteItem: id => dispatch(deleteItem(id)),
  updateNameItem: value => dispatch(updateNameItem(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
