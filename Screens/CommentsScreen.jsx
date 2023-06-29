import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
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

const CommentsScreen = () => {
  const navigation = useNavigation();

  // const [userName, SetUserName] = useState("");
  // const [email, SetEmail] = useState("");
  // const [isPhoto, setIsPhoto] = useState(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            {/* <View style={styles.contentBlock}> */}
            <Image
              style={styles.contentImg}
              source={require("../assets/images/Rectangle23.webp")}
            />
            {/* </View> */}
          </View>
          <View style={styles.commentBlock}>
            <Image
              style={styles.avatarUser}
              source={require("../assets/images/Ellipse.webp")}
            />
            <View style={{ ...styles.comment, marginLeft: 44 }}>
              <Text style={styles.commentText}>
                Really love your most recent photo. I’ve been trying to capture
                the same thing for a few months and would love some tips!
              </Text>
              <Text style={{ ...styles.dataText, textAlign: "right" }}>
                09 червня, 2020 | 08:40
              </Text>
            </View>
          </View>
          <View style={styles.commentBlock}>
            <Image
              style={styles.avatar}
              source={require("../assets/images/Rectangle.webp")}
            />
            <View style={{ ...styles.comment, marginRight: 44 }}>
              <Text style={styles.commentText}>
                A fast 50mm like f1.8 would help with the bokeh. I’ve been using
                primes as they tend to get a bit sharper images.
              </Text>
              <Text style={{ ...styles.dataText, textAlign: "left" }}>
                09 червня, 2020 | 09:14
              </Text>
            </View>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              // onChangeText={SetEmail}
              // value="Ліс"
              placeholder="Коментувати..."
              placeholderTextColor="#BDBDBD"
              // keyboardType="email-address"
            />
            <Feather
              name="arrow-up"
              size={34}
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                width: 34,
                height: 34,
                borderRadius: 50,
                backgroundColor: "#FF6C00",
                color: "#FFFFFF",
                // onPress={handleSubmit}
              }}
            />
          </View>
          {/* <TouchableOpacity
            style={styles.postBtn}
            // onPress={handleSubmit}
          > */}
          {/* </TouchableOpacity> */}
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
  contentImg: {
    width: "99%",
    height: "99%",
    marginBottom: 32,
    borderRadius: 8,
  },
  commentBlock: {
    width: "92%",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  avatarUser: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  avatar: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  comment: {
    width: "90%",
    padding: 16,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: "#00000008",
  },
  commentText: {
    marginBottom: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  dataText: {
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    color: "#BDBDBD",
    textAlign: "right",
  },
  form: {
    width: "92%",
  },
  input: {
    height: 50,
    width: "100%",
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 25,
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});

export default CommentsScreen;
