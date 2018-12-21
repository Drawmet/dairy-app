import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { PersistGate } from "redux-persist/integration/react";

import redux from "./store";

import MainPage from "./components/MainPage/MainPage";
import Title from "./components/Title";
import SubTitle from "./components/SubTitle";
import Sidebar from "./components/Sidebar";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => (
  <Provider store={redux.store}>
    <PersistGate loading={null} persistor={redux.persistor}>
      <div className="App">
        <Sidebar>
          <Title className="sidebar-title">Dairy App</Title>
          <SubTitle className="sidebar-subtitle">
            Comment with no sense
          </SubTitle>
        </Sidebar>
        <MainPage />
        <ToastContainer />
      </div>
    </PersistGate>
  </Provider>
);

export default App;
