import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "native-base";

const { Navigator, Screen } = createStackNavigator();

import Home from "../Home";
import BakeryList from "../BakeryList";
import BakeryDetail from "../BakeryDetail";
import CartList from "../CartList";
import CartButton from "../buttons/CartButton";
import BackButton from "../buttons/BackButton";

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="BakeryList"
        component={BakeryList}
        options={{
          headerStyle: {
            backgroundColor: "#ffd1dc",
          },
          headerTitle: null,
          headerBackImage: () => <Icon type="Entypo" name="home" />,

          headerRight: () => <CartButton />,
        }}
      />
      <Screen
        name="BakeryDetail"
        component={BakeryDetail}
        options={({ route }) => {
          const { bakery } = route.params;
          return {
            title: bakery.name,
            headerStyle: {
              backgroundColor: "#ffd1dc",
            },
            headerTitle: <BackButton />,
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Screen
        name="Cart"
        component={CartList}
        options={{
          headerStyle: {
            backgroundColor: "#ffd1dc",
          },
        }}
      />
    </Navigator>
  );
};

export default RootNavigator;
