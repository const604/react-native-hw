import React from "react";
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

const RegistrationScreen = () => (
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
              // onChangeText={onChangeText}
              // value={text}
            />
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
              secureTextEntry
            />
            <Text style={styles.showPasswordText}>Показати</Text>
            <TouchableOpacity
              style={styles.regBtn}
              // onPress={onPress}
            >
              <Text style={styles.regBtnText}>Зареєстуватися</Text>
            </TouchableOpacity>
            <Text style={styles.anyAccountText}>Вже є акаунт? Увійти</Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  </View>
);

export default RegistrationScreen;
