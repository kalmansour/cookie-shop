import React from "react";
import { observer } from "mobx-react";
import { useState } from "react";
import { Button, Right, ListItem, Body, Left } from "native-base";

import NumericInput from "react-native-numeric-input";
import { Text, Image } from "react-native";

//Styling
import { TotalPrice, TrashIcon } from "../styles";

//Stores
import cartStore from "../stores/cartStore";

const CartItem = ({ item }) => {
  const [cartItemQuantity, setCartItemQuantity] = useState(item.quantity);

  const handleUpdate = () => {
    const updatedItem = { quantity: cartItemQuantity, cookieId: item.id };
    console.log("handleUpdate -> updatedItem", updatedItem);
    cartStore.updateItemInCart(updatedItem);
  };
  return (
    <ListItem>
      <Left>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: item.image }}
        />
        <Text>{item.name}</Text>
      </Left>
      <Body>
        <NumericInput
          rounded
          value={cartItemQuantity}
          onChange={setCartItemQuantity}
          totalHeight={30}
          totalWidth={60}
          // onPress={handleUpdate}
          // initValue={cartItemQuantity}
        />
        <Button onPress={handleUpdate}>
          <Text>Update</Text>
        </Button>
        <TotalPrice style={{ marginLeft: 100 }}>
          {item.price * item.quantity} KWD
        </TotalPrice>
      </Body>
      <Right>
        <TrashIcon
          name="trash"
          type="Ionicons"
          onPress={() => cartStore.removeItemFromCart(item.id)}
        />
      </Right>
    </ListItem>
  );
};

export default observer(CartItem);
