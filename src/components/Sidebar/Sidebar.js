import React from "react";

import Title from "../Title";
import SubTitle from "../SubTitle/SubTitle";

import "./Sidebar.css";
import Button from "../Button";

const Sidebar = ({ children }) => {
  return (
    <div className="sidebar-container">
      <Title className="sidebar-title">Dairy App</Title>
      <SubTitle className="sidebar-subtitle">Comment with no sense</SubTitle>
      <Button label="test" className="btn-success" />
      {children}
    </div>
  );
};

export default Sidebar;
