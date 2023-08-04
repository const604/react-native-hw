import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "../styles/login.styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/operations";
import { useAuth } from "../hooks/useAuth";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(true);
  const { isLoggedIn, isRefreshing } = useAuth();

  const handleSubmit = () => {
    const user = { email: email, password: password };
    if (!email || !password) {
      alert("All fields must be filled");
      return;
    }
    dispatch(logIn(user));
    if (!isLoggedIn) {
      return navigation.navigate("Login");
    }
    navigation.navigate("Home");
    reset();
  };

  const reset = () => {
    SetEmail("");
    SetPassword("");
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
                placeholderTextColor="#BDBDBD"
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                onChangeText={SetPassword}
                minLength={8}
                maxLength={16}
                value={password}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                secureTextEntry={isShowPassword}
              />
              <Text
                style={styles.showPasswordText}
                onPress={() => setIsShowPassword(!isShowPassword)}
              >
                Показати
              </Text>
              <TouchableOpacity style={styles.regBtn} onPress={handleSubmit}>
                <Text style={styles.regBtnText}>Увійти</Text>
              </TouchableOpacity>
              <Text style={styles.anyAccountText}>
                Немає акаунту?
                <Text
                  style={styles.anyAccountLink}
                  onPress={() => navigation.navigate("Registration")}
                >
                  Зареєструватися
                </Text>
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
