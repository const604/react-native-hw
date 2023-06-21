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
import { styles } from "../styles/registration.styles";
import { useNavigation } from "@react-navigation/native";

const RegistrationScreen = () => {
  
  const navigation = useNavigation();
  const [userName, SetUserName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(true);

  const handleSubmit = () => {
    const form = {
      userName: userName,
      email: email,
      password: password,
    };
    console.log(form);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/PhotoBG.webp")}
        resizeMode="stretch"
        style={styles.imageBG}
      >
        <KeyboardAvoidingView
          // behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.containerBG}>
              <View style={styles.containerImg}>
                <Image
                  style={styles.addPhotoImg}
                  source={require("../assets/images/Rectangle.webp")}
                />
                <TouchableOpacity
                  style={styles.addPhotoBtn}
                  // onPress={onPress}
                >
                  <Text style={styles.addPhotoBtnText}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.pageHeader}>Реєстрація </Text>
              <TextInput
                style={styles.input}
                placeholder="Логін"
                onChangeText={SetUserName}
                value={userName}
              />
              <TextInput
                style={styles.input}
                onChangeText={SetEmail}
                value={email}
                placeholder="Адреса електронної пошти"
                // autoComplete="email"
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                onChangeText={SetPassword}
                minLength={8}
                maxLength={16}
                value={password}
                placeholder="Пароль"
                // autoComplete="password"
                secureTextEntry={isShowPassword}
              />
              <Text
                style={styles.showPasswordText}
                onPress={() => setIsShowPassword(!isShowPassword)}
              >
                Показати
              </Text>
              <TouchableOpacity style={styles.regBtn} onPress={handleSubmit}>
                <Text style={styles.regBtnText}>Зареєстуватися</Text>
              </TouchableOpacity>
              <Text
                style={styles.anyAccountText}
                onPress={() => navigation.navigate("LoginScreen")}
              >
                Вже є акаунт? Увійти
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;
