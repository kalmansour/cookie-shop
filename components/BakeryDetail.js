import React from "react";
import { observer } from "mobx-react";
import { Spinner } from "native-base";

//Stores
import bakeryStore from "../stores/bakeryStore";
import cookieStore from "../stores/cookieStore";

//Styles
import {
  BakeryDetailWrapper,
  BakeryDetailImage,
  BakeryDetailTitle,
} from "../styles";

//Components
import CookieList from "./CookieList";

const BakeryDetail = ({ route }) => {
  const { bakery } = route.params;

  if (bakeryStore.loading) return <Spinner />;

  const cookiesFromCookieStore = bakery.cookies.map((cookie) =>
    cookieStore.getCookieById(cookie.id)
  );
  return (
    <>
      <BakeryDetailWrapper>
        <BakeryDetailImage source={{ uri: bakery.image }} />
        <BakeryDetailTitle>{bakery.name}</BakeryDetailTitle>
      </BakeryDetailWrapper>
      <CookieList cookies={cookiesFromCookieStore} />
    </>
  );
};

export default observer(BakeryDetail);
