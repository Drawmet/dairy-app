import React from "react";

import Page from "../Page";
import MenuContainer from "../../containers/MenuContainer";
import CommentsListContainer from "../../containers/CommentsListContainer";

const MainPage = () => (
  <Page>
    <MenuContainer />
    <CommentsListContainer />
  </Page>
);

export default MainPage;
