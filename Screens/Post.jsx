import React, { useState } from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, View, Text, Image } from "react-native";

const Post = () => {
  const navigation = useNavigation();

  
  const {
    params: { photo, title, point, location },
  } = useRoute();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        // height: 812,
        backgroundColor: "#FFFFFF",
      }}
    >
      <View style={styles.containerUser}>
        <Image
          style={styles.avatar}
          source={require("../assets/images/Rectangle.webp")}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.contentBlock}>
          <Image style={styles.contentImg} source={{ uri: photo }} />
        </View>
        <Text style={styles.contentName}>{title}</Text>
        <View style={styles.contentDetails}>
          <View style={styles.contentDetail}>
            <Feather name="message-circle" size={24} color="#BDBDBD" />
            <Text style={styles.comitText}>0</Text>
          </View>
          <View style={styles.contentDetail}>
            <Feather name="map-pin" size={24} color="#BDBDBD" />
            <Text style={styles.mapText}>{point}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerUser: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 32,
    marginLeft: 16,
    height: 60,
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    borderWidth: 1,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  userInfo: {
    marginLeft: 8,
  },
  userName: {
    color: "#212121",
    fontSize: 13,
    fontFamily: "Roboto-Bold",
  },
  userEmail: {
    color: "#212121CC",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
  },
  contentContainer: {
    width: "92%",
    height: 299,
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    // marginTop: 32,
    marginBottom: 32,
    marginLeft: "auto",
    marginRight: "auto",
  },
  contentBlock: {
    width: "100%",
    height: 240,
    // justifyContent: "center",
    // alignItems: "center",
    marginBottom: 8,
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
  contentName: {
    marginBottom: 8,
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    color: "#212121",
  },
  contentDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // width: "90%",
    // marginBottom: 32,
  },
  contentDetail: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // marginRight:25,
    // width: "90%",
  },
  comitText: {
    marginLeft: 4,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
  },
  mapText: {
    marginLeft: 4,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    textDecorationLine: "underline",
  },
});

export default Post;
