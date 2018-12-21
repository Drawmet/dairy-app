import * as actionTypes from "../actionTypes";
import utils from "../../utils";

const errorMiddleware = store => next => action => {
  switch (action.type) {
    case actionTypes.CREATE_COMMENT:
      if (!store.getState().comments.value) {
        return utils.errorMessage("Comment input field is empty");
      }
      return next(action);
    case actionTypes.CREATE_ITEM:
      if (!store.getState().menu.value) {
        return utils.errorMessage("Item input field is empty");
      }
      return next(action);
    default:
      return next(action);
  }
};

export default errorMiddleware;
