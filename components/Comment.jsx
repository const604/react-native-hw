import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { useAuth } from "../hooks/useAuth";

const Comment = ({ comment }) => {

  const { userId, commentDate, text } = comment;
  const { user } = useAuth();

  return user.id === userId ? (
    <View style={styles.commentBlock}>
      <Image
        style={{ ...styles.avatar, width: 28, height: 28 }}
        source={{ uri: user.avatar }}
      />
      <View style={{ ...styles.comment, marginRight: 44 }}>
        <Text style={styles.commentText}>{text}</Text>
        <Text style={{ ...styles.dataText, textAlign: "left" }}>
          {commentDate}
        </Text>
      </View>
    </View>
  ) : (
    <View style={styles.commentBlock}>
      <Image
        style={styles.avatar}
        source={require("../assets/images/free-icon-user-456212.png")}
      />
      <View style={{ ...styles.comment, marginLeft: 44 }}>
        <Text style={styles.commentText}>{text}</Text>
        <Text style={{ ...styles.dataText, textAlign: "right" }}>
          {commentDate}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentBlock: {
    width: "100%",
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
});

export default Comment;
