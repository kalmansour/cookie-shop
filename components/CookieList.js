import { Content, List } from "native-base";
import React from "react";
import CookieItem from "./CookieItem";
import { observer } from "mobx-react";

const CookieList = ({ cookies }) => {
  const cookieList = cookies.map((cookie) => (
    <CookieItem cookie={cookie} key={cookie.id} />
  ));
  return (
    <Content>
      <List>{cookieList}</List>
    </Content>
  );
};

export default observer(CookieList);
