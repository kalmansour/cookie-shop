import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";

//Styles
import { CartButtonStyled, CartTextStyled } from "../../styles";

//Stoes
import cartStore from "../../stores/cartStore";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Button transparent light onPress={() => navigation.navigate("Cart")}>
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
      <CartButtonStyled
        type="MaterialCommunityCartButtonStyleds"
        name="cart"
      ></CartButtonStyled>
    </Button>
  );
};

export default observer(CartButton);
