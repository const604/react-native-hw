import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { useAuth } from "../hooks/useAuth";
import { styles } from "../styles/profile.styles";
import { selectPosts } from "../redux/posts/selectors";
import Post from "../components/Post";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const posts = useSelector(selectPosts);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/PhotoBG.webp")}
        resizeMode="stretch"
        style={styles.imageBG}
      >
        <View style={styles.containerBG}>
          <Feather
            name="log-out"
            size={24}
            color="#BDBDBD"
            style={styles.logoutBtn}
            onPress={() => navigation.navigate("Login")}
          />
          <View style={styles.containerImg}>
            {user.avatar ? (
              <Image
                style={{ ...styles.avatar, width: 120, height: 120 }}
                source={{ uri: user.avatar }}
              />
            ) : (
              <Image
                style={styles.avatar}
                source={require("../assets/images/free-icon-user-456212.png")}
              />
            )}
            <AntDesign
              name="closecircleo"
              size={25}
              style={styles.addPhotoBtn}
              onPress={() => navigation.navigate("Registration")}
            />
          </View>
          <Text style={styles.pageHeader}>{user.userName}</Text>
          <SafeAreaView style={styles.contentContainer}>
            <ScrollView style={styles.contentBlock}>
              {posts.length > 0 &&
                posts.map(
                  ({ postId, photo, title, point, comments, likes }) => (
                    <Post
                      key={postId}
                      postId={postId}
                      photo={photo}
                      title={title}
                      point={point}
                      comments={comments}
                      likes={likes}
                    />
                  )
                )}
            </ScrollView>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
