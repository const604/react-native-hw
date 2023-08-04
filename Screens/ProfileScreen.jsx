import React, { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import { useAuth } from "../hooks/useAuth";



const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => {

  const navigation = useNavigation();

 return (
   <View style={styles.contentContainer}>
     <View style={styles.contentBlock}>
       <Image
         style={styles.contentImg}
         source={require("../assets/images/Rectangle23.webp")}
       />
     </View>
     <Text style={styles.contentName}>Ліс</Text>
     <View style={styles.contentDetails}>
       <View style={styles.contentDetail}>
         <Feather
           name="message-circle"
           size={24}
           color="#FF6C00"
           onPress={() => navigation.navigate("Comments")}
         />
         <Text style={styles.commentText}>50</Text>
         <Feather name="thumbs-up" size={24} color="#FF6C00" />
         <Text style={styles.commentText}>200</Text>
       </View>
       <View style={styles.contentDetail}>
         <Feather
           name="map-pin"
           size={24}
           color="#BDBDBD"
           onPress={() => navigation.navigate("Map")}
         />
         <Text style={styles.mapText}>Ukraine</Text>
       </View>
     </View>
   </View>
 );
};

const ProfileScreen = () => {
  
  const navigation = useNavigation();
  const { user } = useAuth();
  const [isPhoto, setIsPhoto] = useState(true); 

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
            <Image
              style={styles.addPhotoImg}
              source={isPhoto && require("../assets/images/Rectangle.webp")}
            />
            <AntDesign
              name="closecircleo"
              size={25}
              style={styles.addPhotoBtn}
              // onPress={() => navigation.navigate("Login")}
            />
          </View>
          <Text style={styles.pageHeader}>{user.userName}</Text>
          <SafeAreaView style={styles.itemsContainer}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  imageBG: {
    // position: "absolute",
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  containerImg: {
    position: "absolute",
    justifyContent: "center",
    top: -60,
    width: 132,
    height: 120,
  },
  addPhotoImg: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    // borderWidth: 1,
    // borderColor: "#000000",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    // elevation: 5,
  },
  addPhotoBtn: {
    position: "absolute",
    width: 24,
    height: 24,
    top: 85,
    right: 0,
    marginBottom: 32,
    backgroundColor: "#FFFFFF",
    // borderWidth: 1,
    // borderStyle: "solid",
    borderRadius: 50,
    color: "#BDBDBD",
    // borderColor: "transparente",
  },
  containerBG: {
    position: "relative",
    width: "100%",
    height: 766,
    alignItems: "center",
    marginTop: 273,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  logoutBtn: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  pageHeader: {
    marginBottom: 33,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    letterSpacing: 0.03,
    textAlign: "center",
    color: "#212121",
  },
  itemsContainer: {
    flex: 1,
    width: "100%",
  },
  item: {
    // backgroundColor: "#f9c2ff",
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
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

export default ProfileScreen;
