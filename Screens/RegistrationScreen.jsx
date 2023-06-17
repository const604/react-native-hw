import React from "react";
import {
  ImageBackground,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "../styles/registration.styles";

const RegistrationScreen = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require("../assets/images/PhotoBG1.webp")}
      resizeMode="stretch"
      style={styles.imageBG}
    >
      <View style={styles.containerBG}>
        <Image
          style={styles.addPhotoImg}
          // source={require("../assets/images/PhotoBG1.webp")}
        />
        <TouchableOpacity
          style={styles.addPhotoBtn}
          // onPress={onPress}
        ></TouchableOpacity>
        <Text style={styles.addPhotoBtnText}>+</Text>
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
        />
        <TouchableOpacity
          style={styles.regBtn}
          // onPress={onPress}
        >
          <Text style={styles.regBtnText}>Зареєстуватися</Text>
        </TouchableOpacity>
        <Text style={styles.anyAccountText}>Вже є акаунт? Увійти</Text>
      </View>
    </ImageBackground>
  </View>
);

export default RegistrationScreen;

