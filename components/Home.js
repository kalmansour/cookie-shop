import React from "react";

//Styling
// import { ImageBackground, View, Text } from "react-native";
import {
  HomeBackground,
  TopStyling,
  Title,
  OverLayContainer,
  BottomStyling,
  ButtonStyled,
} from "../styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      style={{ flex: 1, width: "100%", height: "100%" }}
      source={{
        uri:
          "https://annabanana.co/wp-content/uploads/2020/03/Chocolate-Chip-Cookies-22.jpg",
      }}
    >
      <OverLayContainer>
        <TopStyling
          style={{
            height: "40%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Title style={{ color: "#000", fontSize: 38, TitleAlign: "center" }}>
            Cookies and Dream
          </Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled onPress={() => navigation.navigate("BakeryList")}>
            Click here to skip
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
