import React, { useState } from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";

const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const [userName, SetUserName] = useState("");
  console.log(userName);
  const [email, SetEmail] = useState("");
  const [isPhoto, setIsPhoto] = useState(true);

  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.contentBlock}>
              <Image
                style={styles.contentImg}
                source={require("../assets/images/Rectangle 23.webp")}
              />
              <View style={styles.cameraBlock}>
                <FontAwesome
                  name="camera"
                  size={24}
                  color="#FFFFFF"
                  // onPress={() => navigation.navigate("LoginScreen")}
                />
              </View>
            </View>
            <Text style={styles.addPhotoText}>Редагувати фото</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              // onChangeText={SetEmail}
              value="Ліс"
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
              // keyboardType="email-address"
            />
            <View style={styles.locationForm}>
              <Feather
                name="map-pin"
                size={24}
                color="#BDBDBD"
                style={{
                  position: "absolute",
                  left: 0,
                }}
              />
              <TextInput
                style={styles.locationInput}
                // onChangeText={SetPassword}
                value="Ivano-Frankivs'k Region, Ukraine"
                placeholder="Місцевість..."
                placeholderTextColor="#BDBDBD"
              />
            </View>
            <TouchableOpacity
              style={styles.postBtn}
              // onPress={handleSubmit}
            >
              <Text style={styles.postText}>Опублікувати</Text>
            </TouchableOpacity>
            <Feather
              name="trash-2"
              size={24}
              style={{
                width: 70,
                height: 40,
                borderRadius: 20,
                paddingLeft: 23,
                paddingTop: 8,
                marginLeft: "auto",
                marginRight: "auto",
                // justifyContent: "center",
                // alignContent: "center",
                backgroundColor: "#F6F6F6",
                color: "#BDBDBD",
                // position: "absolute",
                // left: 0,
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    // paddingLeft: 16,
    // paddingRight: 16,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    width: "92%",
    height: 267,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 32,
    marginBottom: 32,
    marginLeft: "auto",
    marginRight: "auto",
  },
  contentBlock: {
    width: "100%",
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  contentImg: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  cameraBlock: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, 0.30)",
  },
  addPhotoText: {
    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "Roboto-Medium",
  },
  form: {
    width: "92%",
  },
  input: {
    height: 50,
    width: "100%",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  locationForm: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 32,
  },
  locationInput: {
    height: 50,
    width: "100%",
    padding: 28,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    fontSize: 16,
    fontFamily: "Roboto-Medium",
  },
  postBtn: {
    width: "100%",
    height: 51,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 120,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 32,
    paddingTop: 32,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#F6F6F6",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  postText: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    // color: "#BDBDBD",
    color: "#FFFFFF",
  },
  // userEmail: {
  //   color: "#212121CC",
  //   fontSize: 11,
  //   fontFamily: "Roboto-Medium",
  // },
});

export default CreatePostsScreen;
