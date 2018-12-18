import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import MainPage from "./components/MainPage/MainPage";
import Title from "./components/Title";
import SubTitle from "./components/SubTitle";
import Sidebar from "./components/Sidebar";

import "./App.css";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Sidebar>
        <Title className="sidebar-title">Dairy App</Title>
        <SubTitle className="sidebar-subtitle">Comment with no sense</SubTitle>
      </Sidebar>
      <MainPage />
    </div>
  </Provider>
);

export default App;
