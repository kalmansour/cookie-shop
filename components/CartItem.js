import React from "react";
import { useState } from "react";
import { Button, Right, ListItem, Body } from "native-base";

import NumericInput from "react-native-numeric-input";
import { Text } from "react-native";

//Styling
import { TotalPrice } from "../styles";

//Stores
import cartStore from "../stores/cartStore";

const CartItem = ({ item }) => {
  const [cartItemQuantity, setCartItemQuantity] = useState(item.quantity);

  const handleUpdate = () => {
    const updatedItem = { quantity: cartItemQuantity, cookieId: cookie.id };
    console.log("handleUpdate -> updatedItem", updatedItem);
    cartStore.updateItemInCart(updatedItem);
  };
  return (
    <ListItem>
      <Body>
        <Text>{item.name}</Text>
        <Right>
          <NumericInput
            rounded
            value={cartItemQuantity}
            onChange={setCartItemQuantity}
            totalHeight={30}
            totalWidth={60}
            onPress={handleUpdate}
            // initValue={cartItemQuantity}
          />
        </Right>
        {/* <Text note>
          {item.price} KWD x {item.quantity}
        </Text> */}
        <TotalPrice>{item.price * item.quantity} KWD</TotalPrice>
      </Body>
    </ListItem>
  );
};

export default CartItem;
