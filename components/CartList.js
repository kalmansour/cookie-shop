import { List, Spinner } from "native-base";
import React from "react";
import cartStore from "../stores/cartStore";
import cookieStore from "../stores/cookieStore";
import CartItem from "./CartItem";
import { observer } from "mobx-react";

const CartList = () => {
  if (cookieStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...cookieStore.getCookieById(item.cookieId),
      quanity: item.quanity,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);
  return <List>{cartList}</List>;
};

export default observer(CartList);
