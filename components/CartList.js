import { List, Spinner } from "native-base";
import React from "react";
import cartStore from "../stores/cartStore";
import cookieStore from "../stores/cookieStore";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
import { CheckOutButton, CheckoutButtonText } from "../styles";

const CartList = () => {
  if (cookieStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...cookieStore.getCookieById(item.cookieId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);
  return (
    <>
      <List>{cartList}</List>
      <CheckOutButton onPress={cartStore.checkout}>
        <CheckoutButtonText>Checkout</CheckoutButtonText>
      </CheckOutButton>
    </>
  );
};

export default observer(CartList);
