import React from "react";
import {
  ImageBackground,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "../styles/login.styles";

const LoginScreen = () => (
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
        <View style={styles.containerBG}>
          <Text style={styles.pageHeader}>Увійти </Text>
          <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={email}
            placeholder="Адреса електронної пошти"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={password}
            placeholder="Пароль"
          />
          <Text style={styles.showPasswordText}>Показати</Text>
          <TouchableOpacity
            style={styles.regBtn}
            // onPress={onPress}
          >
            <Text style={styles.regBtnText}>Увійти</Text>
          </TouchableOpacity>
          <Text style={styles.anyAccountText}>
            Немає акаунту?
            <Text style={styles.anyAccountLink}>Зареєструватися</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  </View>
);

export default LoginScreen;
