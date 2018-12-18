import * as actionTypes from "../actionTypes";

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

export const deleteItem = id => {
  return {
    type: actionTypes.DELETE_ITEM,
    payload: {
      id
    }
  };
};

export const createItem = item => {
  return {
    type: actionTypes.CREATE_ITEM,
    payload: { item }
  };
};

export const createComment = comment => {
  return {
    type: actionTypes.CREATE_COMMENT,
    payload: {
      comment
    }
  };
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
