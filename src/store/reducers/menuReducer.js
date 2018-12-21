import * as actionTypes from "../actionTypes";

const initialState = {
  proccessed: true,
  data: [],
  active: null,
  value: ""
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE_APP:
      return {
        ...state,
        proccessed: false,
        data: action.payload.data
      };
    case actionTypes.UPDATE_ACTIVE:
      return {
        ...state,
        active: action.payload.id
      };
    case actionTypes.UPDATE_NAME_INPUT:
      return {
        ...state,
        value: action.payload.value
      };
    case actionTypes.CREATE_ITEM:
      return {
        ...state,
        value: "",
        data: [
          ...state.data,
          { id: action.payload.id, value: state.value, comments_number: 0 }
        ],
        value: ""
      };
    case actionTypes.DELETE_ITEM:
      return {
        ...state,
        active: state.active === action.payload.id ? null : state.active,
        data: [...state.data.filter(item => item.id !== action.payload.id)]
      };
    case actionTypes.CREATE_COMMENT:
      return {
        ...state,
        data: state.data.map(item =>
          item.id === state.active
            ? { ...item, comments_number: item.comments_number + 1 }
            : item
        )
      };
    default:
      return state;
  }
};

export default menuReducer;
