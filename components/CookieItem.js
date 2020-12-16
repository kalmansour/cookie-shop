import React from "react";
import { useState } from "react";
import { Image } from "react-native";
import { Button, Left, ListItem, Right } from "native-base";
import NumericInput from "react-native-numeric-input";
import { Text } from "react-native";

//Styling
import { CookieItemStyled } from "../styles";

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
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: cookie.image }}
        />
        <CookieItemStyled>{cookie.name}</CookieItemStyled>
      </Left>
      <Right>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          totalHeight={30}
          totalWidth={60}
          initValue={quantity}
        />
        <Button onPress={handleAdd}>
          <Text>Add</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default CookieItem;
