import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "../styles/login.styles";

const LoginScreen = () => {
  
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const handleSubmit = (e) => {
    const form = { email: email, password: password };
    console.log(form);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/PhotoBG.webp")}
        resizeMode="stretch"
        style={styles.imageBG}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.containerBG}>
              <Text style={styles.pageHeader}>Увійти </Text>
              <TextInput
                style={styles.input}
                onChangeText={SetEmail}
                value={email}
                placeholder="Адреса електронної пошти"
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                onChangeText={SetPassword}
                value={password}
                placeholder="Пароль"
                secureTextEntry
              />
              <Text style={styles.showPasswordText}>Показати</Text>
              <TouchableOpacity style={styles.regBtn} onPress={handleSubmit}>
                <Text style={styles.regBtnText}>Увійти</Text>
              </TouchableOpacity>
              <Text style={styles.anyAccountText}>
                Немає акаунту?
                <Text style={styles.anyAccountLink}>Зареєструватися</Text>
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
