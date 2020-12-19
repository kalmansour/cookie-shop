import React from "react";
import { useState } from "react";
import { Image } from "react-native";
import { Button, Left, ListItem, Right } from "native-base";
import NumericInput from "react-native-numeric-input";
import { Text } from "react-native";

//Styling
import {
  CookieItemStyled,
  AddCookieButtonStyled,
  AddCookieTextStyled,
  CookieImage,
} from "../styles";

//Stores
import cartStore from "../stores/cartStore";

const CookieItem = ({ cookie }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { quantity, cookieId: cookie.id };
    console.log("handleAdd -> newItem", newItem);
    cartStore.addItemToCart(newItem);
  };

  return (
    <ListItem>
      <Left>
        <CookieImage source={{ uri: cookie.image }} />
        <CookieItemStyled>
          {cookie.name} {"\n"}
          <Text note style={{ fontSize: 16, color: "#444" }}>
            KWD {cookie.price}
          </Text>
        </CookieItemStyled>
      </Left>
      <Right>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          totalHeight={40}
          totalWidth={70}
          initValue={quantity}
        />
        <AddCookieButtonStyled onPress={handleAdd}>
          <AddCookieTextStyled>Add</AddCookieTextStyled>
        </AddCookieButtonStyled>
      </Right>
    </ListItem>
  );
};

export default CookieItem;
