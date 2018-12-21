import * as actionTypes from "../actionTypes";
import utils from "../../utils";
import constants from "../../constants";

const initialState = {
  data: [],
  value: "",
  color: constants.colors.GREY
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_ITEM:
      return {
        ...state,
        data: [...state.data, { itemId: action.payload.id, value: [] }]
      };
    case actionTypes.CHANGE_COMMENT_VALUE:
      return {
        ...state,
        value: action.payload.value
      };
    case actionTypes.CHANGE_COLOR_COMMENT:
      return {
        ...state,
        color: action.payload.color
      };
    case actionTypes.CREATE_COMMENT:
      return {
        ...state,
        data: utils.newComment(state, action.payload.itemId),
        value: ""
      };
    case actionTypes.DELETE_ITEM:
      return {
        ...state,
        data: state.data.filter(item => item.itemId !== action.payload.id)
      };
    default:
      return state;
  }
};

export default menuReducer;
