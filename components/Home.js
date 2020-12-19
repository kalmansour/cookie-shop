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
        uri: "https://wallpaperaccess.com/full/1572380.jpg",
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
          <Title
            style={{
              color: "pink",
              fontSize: 38,
              TitleAlign: "center",
              fontWeight: "bold",
            }}
          >
            Cookies and Dream
          </Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled
            style={{ color: "pink", fontSize: 30, TitleAlign: "center" }}
            onPress={() => navigation.navigate("BakeryList")}
          >
            Click here to skip
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
