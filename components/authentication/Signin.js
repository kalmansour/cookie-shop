import { observer } from "mobx-react";
import React from "react";
import { useState } from "react";
import authStore from "../../stores/authStore";
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  AuthOther,
} from "../../styles";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.replace("BakeryList");
  };

  return (
    <AuthContainer>
      <AuthTitle>Signin</AuthTitle>
      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
      />
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        New customer? Start here
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Signin);
