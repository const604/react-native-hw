import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
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
  const [isPhoto, setIsPhoto] = useState(true);

  const handleSubmit = () => {
    const form = {
      userName: userName,
      email: email,
      password: password,
    };
    if (!userName || !email || !password) {
      alert("All fields must be filled");
      return;
    }
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
                  source={isPhoto && require("../assets/images/Rectangle.webp")}
                />
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  style={styles.addPhotoBtn}
                  // onPress={() => navigation.navigate("LoginScreen")}
                />
              </View>
              <Text style={styles.pageHeader}>Реєстрація </Text>
              <TextInput
                style={styles.input}
                placeholder="Логін"
                placeholderTextColor="#BDBDBD"
                onChangeText={SetUserName}
                value={userName}
              />
              <TextInput
                style={styles.input}
                onChangeText={SetEmail}
                value={email}
                placeholder="Адреса електронної пошти"
                placeholderTextColor="#BDBDBD"
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
                placeholderTextColor="#BDBDBD"
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
