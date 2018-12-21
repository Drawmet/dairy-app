import * as actionTypes from "../actionTypes";

export const createItem = item => {
  return {
    type: actionTypes.CREATE_ITEM,
    payload: { item }
  };
};

export const createComment = () => {
  return {
    type: actionTypes.CREATE_COMMENT
  };
};

export const changeComment = value => {
  return {
    type: actionTypes.CHANGE_COMMENT_VALUE,
    payload: { value }
  };
};

export const changeColorComment = color => {
  return {
    type: actionTypes.CHANGE_COLOR_COMMENT,
    payload: { color }
  };
};

export const deleteItem = id => {
  return {
    type: actionTypes.DELETE_ITEM,
    payload: {
      id
    }
  };
};

export const initializeApp = () => {
  return {
    type: actionTypes.INITIALIZE_APP
  };
};

export const updateActive = id => dispatch => {
  dispatch(updateCommentsById(id));

  dispatch({
    type: actionTypes.UPDATE_ACTIVE,
    payload: { id }
  });
};

export const updateNameItem = value => {
  return {
    type: actionTypes.UPDATE_NAME_INPUT,
    payload: {
      value
    }
  };
};

export const updateCommentsById = id => {
  return {
    type: actionTypes.UPDATE_COMMENTS_BY_ID,
    payload: { id }
  };
};
