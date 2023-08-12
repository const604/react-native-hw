import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
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
  ScrollView,
} from "react-native";
import { createPost } from "../redux/posts/operations";

const CreatePostsScreen = () => {
  const dispatch = useDispatch();

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);

  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [point, setPoint] = useState("");
  const [location, setLocation] = useState(null);

  const navigation = useNavigation();

  const focused = useIsFocused();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      requestPermission(status === "granted");
    })();
  }, []);

  if (permission === null) {
    return <View />;
  }
  if (permission === false) {
    return <Text>No access to camera</Text>;
  }

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const takePicture = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPhoto(uri);

      await MediaLibrary.createAssetAsync(uri);
    }
  };

  const publishPost = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setLocation(coords);

    const post = {
      title: title,
      photo: photo,
      point: point,
      comments: [],
      likes: [],
    };

    dispatch(createPost(post));

    navigation.navigate("Posts");
    setPhoto(null);
    setTitle("");
    setPoint("");
  };

  const onTrash = () => {
    setPhoto(null);
    setTitle("");
    setPoint("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.contentBlock}>
              {permission && (
                <>
                  {focused && (
                    <Camera
                      style={styles.camera}
                      type={type}
                      ref={setCameraRef}
                    >
                      <View style={styles.cameraBlock}>
                        <FontAwesome
                          name="camera"
                          size={24}
                          color="#FFFFFF"
                          onPress={takePicture}
                        />
                      </View>
                      <View style={styles.photoView}>
                        <MaterialIcons
                          name="flip-camera-android"
                          size={24}
                          color="#BDBDBD"
                          onPress={toggleCameraType}
                        />
                      </View>
                    </Camera>
                  )}
                </>
              )}
              {photo && (
                <Image style={styles.contentImg} source={{ uri: photo }} />
              )}
            </View>
            <Text
              style={styles.addPhotoText}
              onPress={() => navigation.navigate("Map")}
            >
              Редагувати фото
            </Text>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setTitle(text)}
              value={title}
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
            />
            <View style={styles.locationForm}>
              <TextInput
                style={styles.locationInput}
                onChangeText={(text) => setPoint(text)}
                value={point}
                placeholder="Місцевість..."
                placeholderTextColor="#BDBDBD"
              />
            </View>
            <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
              style={{
                position: "absolute",
                top: 80,
                left: 0,
              }}
              onPress={() => navigation.navigate("Map")}
            />
            <TouchableOpacity style={styles.postBtn} onPress={publishPost}>
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
                backgroundColor: "#F6F6F6",
                color: "#BDBDBD",
              }}
              onPress={onTrash}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    width: "100%",
    height: 367,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 32,
    marginBottom: 32,
    marginLeft: "auto",
    marginRight: "auto",
  },
  contentBlock: {
    width: "100%",
    height: 340,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  camera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  photoView: {
    position: "absolute",
    right: 10,
    bottom: 10,
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
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.30)",
  },
  addPhotoText: {
    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "Roboto-Medium",
  },
  form: {
    width: "100%",
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
    paddingLeft: 38,
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  postText: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
});

export default CreatePostsScreen;
