import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      initialRouteName="Публікації"
      screenOptions={({ route }) => ({
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;

        //   if (route.name === "Profile") {
        //     iconName = "user";
        //     } else if (route.name === "Створити публікацію") {
        //       iconName = "plus";
        //   } else if (route.name === "Публікації") {
        //     iconName = "grid";
        //   }
        //   return <Feather name={iconName} size={size} color={color} />;
        // },
        headerTintColor: "#212121",
        headerTitleStyle: {
          fontWeight: 500,
          fontSize: 17,
        },
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarItemStyle: {
          borderRadius: 20,
          width: 70,
          height: 40,
          marginRight: "2%",
        },
        // tabBarActiveTintColor: "#FFFFFF",
        // tabBarActiveBackgroundColor: "#FF6C00",
        tabBarStyle: {
          paddingTop: 9,
          justifyContent: "center",
          paddingLeft: "25%",
          paddingRight: "25%",
          paddingBottom: 32,
          height: 83,
        },
        // tabBarStyle: [
        //   {
        //     display: "flex",
        //     paddingTop: 4,
        //     paddingBottom: 4,
        //   },
        //   null,
        // ],
        // tabBarIconStyle: {
        //   width: 70,
        //   height: 40,
        //   borderRadius: 20,
        //   backgroundColor: "#FF6C00",
        // },
      })}
    >
      <Tabs.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          headerRightContainerStyle: { paddingRight: 16 },
          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate("LoginScreen")}
            />
          ),
          tabBarActiveBackgroundColor: "#FFFFFF",
          tabBarIcon: ({ size }) => (
            <Feather name="grid" color="#BDBDBD" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          headerLeftContainerStyle: { paddingLeft: 16 },
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={24}
              color="#212121CC"
              onPress={() => navigation.navigate("Публікації")}
            />
          ),
          tabBarStyle: { display: "none" },
          tabBarIconStyle: {
            width: 70,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#FF6C00",
          },
          tabBarIcon: ({ size }) => (
            <Feather name="plus" color="#FFFFFF" size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#FFFFFF",
          tabBarIcon: ({ size }) => (
            <Feather
              name="user"
              size={size}
              color="#BDBDBD"
              // backgroundColor={focused ? "#FF6C00" : "#FFFFFF"}
              // color={focused ? "#FFFFFF" : "#BDBDBD"}
              // width={70}
              // height={40}
              // borderRadius={20}
            />
          ),
          // tabBarActiveBackgroundColor: "#FF6C00",
          // tabBarInactiveTintColor: "#BDBDBD",
          // tabBarIconStyle: {
          //   backgroundColor: "#FF6C00",
          //   color: "#FFFFFF",
          //   width: 70,
          //   height: 40,
          //   borderRadius: 20,
          // },
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
