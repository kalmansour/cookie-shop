import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

//Components
import RootNavigator from "./components/Navigation";

//Styles
import { ThemeProvider } from "styled-components";
import { theme } from "./styles";

// const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme.light}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
