import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function PostsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>PostsScreen!</Text>
    </View>
  );
}

function CreatePostsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>CreatePostsScreen!</Text>
    </View>
  );
}

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = focused ? "ios-person-sharp" : "ios-person-outline";
          } else if (route.name === "Створити публікацію") {
            iconName = focused ? "ios-add" : "ios-add-outline";
          } else if (route.name === "Публікації") {
            iconName = focused ? "ios-grid" : "ios-grid-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FF6C00",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      })}
    >
      <Tabs.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerStyle: {
          },
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontWeight: 500,
            fontSize: 17,
          },
          headerRight: () => (
            <Ionicons
              name="log-out-outline"
              size={30}
              color="#BDBDBD"
              onPress={() => navigation.navigate("LoginScreen")}
            />
          ),
        }}
      />
      <Tabs.Screen name="Створити публікацію" component={CreatePostsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
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
