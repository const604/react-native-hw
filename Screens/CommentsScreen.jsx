import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { selectPosts } from "../redux/posts/selectors";
import { updateComments } from "../redux/posts/operations";
import Comment from "../components/Comment";
import { auth } from "../firebase/config";

const CommentsScreen = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const [text, setText] = useState("");

  const {
    params: { photo, postId },
  } = useRoute();

  const comments = posts.find((post) => post.postId === postId).comments;

  const publishComment = () => {
    const data = new Date().toLocaleString();
    dispatch(
      updateComments({
        postId: postId,
        userId: auth.currentUser.uid,
        text: text,
        commentDate: data,
      })
    );
    setText("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <SafeAreaView style={styles.contentContainer}>
            <ScrollView style={styles.commentContainer}>
              <View style={styles.imageContainer}>
                <Image style={styles.contentImg} source={{ uri: photo }} />
              </View>
              {comments &&
                comments.map((comment, index) => (
                  <Comment key={index} comment={comment} />
                ))}
              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  editable
                  multiline
                  maxLength={140}
                  onChangeText={setText}
                  value={text}
                  placeholder="Коментувати..."
                  placeholderTextColor="#BDBDBD"
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
                  }}
                  onPress={publishComment}
                />
              </View>
            </ScrollView>
          </SafeAreaView>
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
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    width: "96%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 32,
    marginLeft: "auto",
    marginRight: "auto",
  },
  imageContainer: {
    width: "100%",
    height: 267,
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
  commentContainer: {
    width: "99%",
    height: "99%",
  },
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
  form: {
    width: "100%",
  },
  input: {
    width: "100%",
    marginBottom: 80,
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 50,
    paddingBottom: 10,
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
