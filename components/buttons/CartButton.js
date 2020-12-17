import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";
import { Alert } from "react-native";

//Styles
import { CartButtonStyled, CartTextStyled } from "../../styles";

//Stoes
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

const CartButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (authStore.user) navigation.navigate("Cart");
    else {
      Alert.alert(
        "Signin",
        "You need to sign in before seeing the cart",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <Button transparent light onPress={handlePress}>
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
      <CartButtonStyled
        type="MaterialCommunityCartButtonStyleds"
        name="cart"
      ></CartButtonStyled>
    </Button>
  );
};

export default observer(CartButton);
