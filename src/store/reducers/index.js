import { combineReducers } from "redux";

import menuReducer from "./menuReducer";
import commentsReducer from "./commentsReducer";

export default combineReducers({
  menu: menuReducer,
  comments: commentsReducer
});
