import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import dataAccessLayer from "./dataAccessLayer";

const middlewares = [thunk, dataAccessLayer, createLogger()];

export default applyMiddleware(...middlewares);
