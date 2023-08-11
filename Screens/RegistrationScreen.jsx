import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
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
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";

const RegistrationScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [userName, SetUserName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [avatar, setAvatar] = useState(null);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [3, 3],
        quality: 0.5,
      });

      if (!result.canceled) {
        setAvatar(result.assets[0].uri);
      } else
        Alert.alert("Delete", "Are you sure you want to delete the image", [
          { text: "Yes", onPress: () => setAvatar(null) },
          { text: "No" },
        ]);
    } catch (error) {
      console.log("error reading an image");
    }
  };

  const handleSubmit = () => {
    const user = {
      userName: userName,
      email: email,
      password: password,
      avatar: avatar,
    };

    if (!userName || !email || !password) {
      alert("All fields must be filled");
      return;
    }
    dispatch(register(user));
    SetUserName("");
    SetEmail("");
    SetPassword("");
    setAvatar(null);
    navigation.navigate("Login");
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
              <View style={styles.containerImg}>
                {avatar ? (
                  <Image
                    style={{ ...styles.avatar, width: 120, height: 120 }}
                    source={{ uri: avatar }}
                  />
                ) : (
                  <Image
                    style={styles.avatar}
                    source={require("../assets/images/free-icon-user-456212.png")}
                  />
                )}
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  style={styles.addPhotoBtn}
                  onPress={pickImage}
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
                placeholder="Адреса електронної пошти"
                placeholderTextColor="#BDBDBD"
                // autoComplete="email"
                keyboardType="email-address"
                value={email}
              />
              <TextInput
                style={styles.input}
                onChangeText={SetPassword}
                minLength={8}
                maxLength={16}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                // autoComplete="password"
                secureTextEntry={isShowPassword}
                value={password}
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
                onPress={() => navigation.navigate("Login")}
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
