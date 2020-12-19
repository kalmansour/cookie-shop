import React from "react";
import { observer } from "mobx-react";
import { useState } from "react";
import { Right, ListItem, Body, Left } from "native-base";

import NumericInput from "react-native-numeric-input";

//Styling
import {
  TotalPrice,
  UpdateQuantityButtonStyled,
  UpdateTextStyled,
  CartItemImage,
  CartItemStyled,
} from "../styles";
// TrashIcon
//Stores
import cartStore from "../stores/cartStore";

const CartItem = ({ item }) => {
  const [cartItemQuantity, setCartItemQuantity] = useState(item.quantity);

  const handleUpdate = () => {
    const updatedItem = { quantity: cartItemQuantity, cookieId: item.id };
    cartStore.updateItemInCart(updatedItem);
  };
  return (
    <ListItem>
      <Left>
        <CartItemImage
          style={{ width: 100, height: 100 }}
          source={{ uri: item.image }}
        />
        <CartItemStyled
          style={{
            fontSize: 14,
            marginTop: 40,
            marginBottom: 10,
            marginLeft: 16,
            width: 100,
          }}
        >
          {item.name}
        </CartItemStyled>
      </Left>
      <Body>
        <TotalPrice style={{ marginLeft: 60, marginRight: 60 }}>
          {item.price * item.quantity} KWD
        </TotalPrice>
      </Body>
      <Right>
        <NumericInput
          rounded
          value={cartItemQuantity}
          onChange={setCartItemQuantity}
          totalHeight={40}
          totalWidth={70}
          style={{ marginTop: 10, marginBottom: 10, marginLeft: 106 }}
        />
        <UpdateQuantityButtonStyled onPress={handleUpdate}>
          <UpdateTextStyled>Update</UpdateTextStyled>
        </UpdateQuantityButtonStyled>
      </Right>
    </ListItem>
  );
};

export default observer(CartItem);

//Delete Cart Item Optional
{
  /* <TrashIcon
          name="trash"
          type="Ionicons"
          onPress={() => cartStore.removeItemFromCart(item.id)}
        /> */
}
