import React from "react";
import { useNavigation } from "@react-navigation/native";

import { CartButtonStyled } from "../../styles";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <CartButtonStyled
      type="MaterialCommunityCartButtonStyleds"
      name="cart"
      onPress={() => navigation.navigate("Cart")}
    ></CartButtonStyled>
  );
};

export default CartButton;
