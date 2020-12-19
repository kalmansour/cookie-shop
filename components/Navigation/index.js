import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "native-base";
import { HeaderBackButton } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

// Components
import Home from "../Home";
import BakeryList from "../BakeryList";
import BakeryDetail from "../BakeryDetail";
import CartList from "../CartList";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

//Buttons
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
          headerBackImage: () => (
            <Icon type="Entypo" name="home" style={{ paddingLeft: 30 }} />
          ),
          headerTitle: null,
          headerBackTitle: null,
          headerBackTitleVisible: null,

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
            headerTitle: null,
            headerBackTitleVisible: null,
            headerBackImage: () => <BackButton />,
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
          headerTitle: null,
          headerBackTitle: null,
          headerBackTitleVisible: null,
          headerBackImage: () => <BackButton />,
          headerRight: () => <CartButton />,
        }}
      />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false, headerBackTitle: null }}
      />
    </Navigator>
  );
};

export default RootNavigator;
