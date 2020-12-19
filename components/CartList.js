import React from "react";
import { observer } from "mobx-react";
import { List, Spinner, Footer, FooterTab, Button, Title } from "native-base";

//Stores
import cartStore from "../stores/cartStore";
import cookieStore from "../stores/cookieStore";

//Components
import CartItem from "./CartItem";

//Styling
import { CheckoutButtonText, EmptyCartBackground } from "../styles";

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
      {cartStore.items.length < 1 ? (
        <>
          <EmptyCartBackground
            source={{
              uri:
                "https://thumbs.dreamstime.com/b/empty-metal-shopping-trolley-purple-background-discount-shopping-concept-empty-metal-shopping-trolley-purple-background-164592555.jpg",
            }}
          >
            <Title
              style={{
                paddingTop: 100,
                color: "black",
                fontSize: 38,
                TitleAlign: "center",
                fontWeight: "bold",
              }}
            >
              Your cart is empty
            </Title>
          </EmptyCartBackground>
        </>
      ) : (
        <>
          <Footer>
            <FooterTab>
              <Button
                onPress={cartStore.checkout}
                full
                style={{
                  backgroundColor: "pink",
                  // marginTop: 650,
                }}
              >
                <CheckoutButtonText>Checkout</CheckoutButtonText>
              </Button>
            </FooterTab>
          </Footer>
        </>
      )}
    </>
  );
};

export default observer(CartList);
