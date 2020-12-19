import styled from "styled-components/native";
import { Icon, Text, Button } from "native-base";

export const theme = {
  light: {
    mainColor: "mediumpurple", // main font color
    backgroundColor: "#f5fffa", // main background color
    pink: "#eea9b8",
    red: "#FF0000",
  },
  dark: {
    mainColor: "#f5fffa", // main font color
    backgroundColor: "mediumpurple", // main background color
    pink: "#eea9b8",
    red: "#FF0000",
  },
};

//Signin Styling
export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: ${({ theme }) => theme.pink};
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: ${({ theme }) => theme.pink};
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.pink};
  border-bottom-color: ${({ theme }) => theme.pink};
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.pink};
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthOther = styled.Text`
  color: ${({ theme }) => theme.pink};
  margin-top: 15px;
`;

export const EmptyCartBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100;
`;

//Home Styling
export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100;
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38;
  text-align: center;
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled.Text`
  font-size: 20;
  color: #fff;
`;

export const BakeryItemStyled = styled.Text`
  color: ${({ theme }) => theme.mainColor};
  font-size: 18;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`;

export const BakeryDetailWrapper = styled.View`
  margin-top: 50;
`;

export const BakeryDetailImage = styled.Image`
  width: 300;
  height: 150;
  margin-right: auto;
  margin-left: auto;
`;

export const BakeryDetailTitle = styled.Text`
  color: ${({ theme }) => theme.mainColor};
  font-weight: bold;
  font-size: 35;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10;
`;

export const CookieItemStyled = styled.Text`
  color: ${({ theme }) => theme.mainColor};
  font-size: 18;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`;

export const TotalPrice = styled.Text`
  color: ${({ theme }) => theme.pink};
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

export const CartButtonStyled = styled(Icon)`
  color: black;
  margin-right: 10px;
`;

export const BackButtonStyled = styled(Icon)`
  color: black;
  margin-right: 10px;
  padding-left: 20;
`;

export const CartTextStyled = styled(Text)`
  color: ${({ theme }) => theme.backgroundColor};
  font-size: 20px;
`;

export const TrashIcon = styled(Icon)`
  color: ${({ theme }) => theme.red};
`;

export const CheckOutButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.pink};
`;

export const CheckoutButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AddCookieButtonStyled = styled(Button)`
  height: 35;
  width: 70;
  margin-top: 10;
  background-color: ${({ theme }) => theme.mainColor};
`;

export const AddCookieTextStyled = styled.Text`
  text-align: center;
  color: white;
  font-size: 16;
  font-weight: bold;
  flex: 1;
`;

export const CookieImage = styled.Image`
  width: 100;
  height: 100;
`;

export const UpdateQuantityButtonStyled = styled(Button)`
  height: 35;
  width: 70;
  margin-top: 10;
  background-color: ${({ theme }) => theme.mainColor};
`;

export const UpdateTextStyled = styled.Text`
  text-align: center;
  color: white;
  font-size: 16;
  font-weight: bold;
  flex: 1;
`;

export const CartItemImage = styled.Image`
  width: 100;
  height: 100;
`;

export const CartItemStyled = styled.Text`
  color: ${({ theme }) => theme.mainColor};
  font-size: 18;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`;
