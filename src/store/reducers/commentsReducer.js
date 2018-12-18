import * as actionTypes from "../actionTypes";
import updateComments from "../../utils";

const initialState = {
  data: []
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_COMMENTS_BY_ID:
      return {
        ...state,
        data: updateComments(state, action.payload.comments)
      };
    default:
      return state;
  }
};

export default menuReducer;
