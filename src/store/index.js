import { createStore, compose } from "redux";

import { initializeApp } from "./actions";
import middlewares from "./middlewares";
import reducers from "./reducers";

const store = createStore(reducers, undefined, compose(middlewares));
store.dispatch(initializeApp());

export default store;
