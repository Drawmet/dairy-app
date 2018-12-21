import { createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";

// import { initializeApp } from "./actions"; // Initialize data for test;
import middlewares from "./middlewares";
import reducers from "./reducers";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, undefined, compose(middlewares));

// store.dispatch(initializeApp()); // Initialize data for test;
const persistor = persistStore(store);

export default {
  store,
  persistor
};
