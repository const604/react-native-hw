import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView, View, Text, Image, ScrollView } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { getPosts } from "../redux/posts/operations";
import { selectPosts } from "../redux/posts/selectors";
import Post from "../components/Post";
import { styles } from "../styles/posts.styles";

const PostsScreen = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#FFFFFF",
      }}
    >
      <View style={styles.containerUser}>
        {user.avatar ? (
          <Image
            style={{ ...styles.avatar, width: 60, height: 60 }}
            source={{ uri: user.avatar }}
          />
        ) : (
          <Image
            style={styles.avatar}
            source={require("../assets/images/free-icon-user-456212.png")}
          />
        )}
        <View style={styles.userInfo}>
          {user && (
            <>
              <Text style={styles.userName}>{user.userName}</Text>
              <Text style={styles.userEmail}>{user.email}</Text>
            </>
          )}
        </View>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          {posts.length > 0 &&
            posts.map(({ postId, photo, title, point, comments, likes }) => (
              <Post
                key={postId}
                postId={postId}
                photo={photo}
                title={title}
                point={point}
                comments={comments}
                likes={likes}
              />
            ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default PostsScreen;
