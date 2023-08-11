import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation} from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { StyleSheet, View, Text, Image } from "react-native";
import { updateLikes } from "../redux/posts/operations";
import { auth } from "../firebase/config";

const Post = ({ postId, photo, title, point, comments, likes }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addLike = () => {
    dispatch(
      updateLikes({
        postId: postId,
        userId: auth.currentUser.uid,
      })
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#FFFFFF",
      }}
    >
      <View style={styles.contentContainer}>
        <View style={styles.contentBlock}>
          <Image style={styles.contentImg} source={{ uri: photo }} />
        </View>
        <Text style={styles.contentName}>{title}</Text>
        <View style={styles.contentDetails}>
          <View style={styles.contentDetail}>
            <Feather
              name="message-circle"
              size={24}
              color={comments.length > 0 ? "#FF6C00" : "#BDBDBD"}
              onPress={() =>
                navigation.navigate("Comments", {
                  photo,
                  postId,
                })
              }
            />
            <Text style={styles.commentText}>{comments.length}</Text>
            <Feather
              name="thumbs-up"
              size={24}
              color={likes.length > 0 ? "#FF6C00" : "#BDBDBD"}
              onPress={addLike}
            />
            <Text style={styles.commentText}>{likes.length}</Text>
          </View>
          <View style={styles.contentDetail}>
            <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate("Map")}
            />
            <Text style={styles.mapText}>{point}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    width: "96%",
    height: 299,
    marginBottom: 32,
    marginLeft: "auto",
    marginRight: "auto",
  },
  contentBlock: {
    width: "100%",
    height: 240,
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
  },
  contentDetail: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  commentText: {
    marginLeft: 4,
    marginRight: 20,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#212121",
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
