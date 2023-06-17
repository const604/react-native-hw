import React from "react";
import {
  ImageBackground,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "../styles/login.styles";

const LoginScreen = () => (
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
    </ImageBackground>
  </View>
);

export default LoginScreen;
