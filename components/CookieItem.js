import React from "react";
import { Image } from "react-native";
import { ListItem } from "native-base";
import { CookieItemStyled } from "../styles";

const CookieItem = ({ cookie }) => {
  return (
    <ListItem>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: cookie.image }}
      />
      <CookieItemStyled>{cookie.name}</CookieItemStyled>
    </ListItem>
  );
};

export default CookieItem;
