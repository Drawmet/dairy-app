import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import dataAccessLayer from "./dataAccessLayer";
import errorMiddleware from "./errorMiddleware";

const middlewares = [thunk, dataAccessLayer, errorMiddleware, createLogger()];

export default applyMiddleware(...middlewares);
