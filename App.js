import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import CommentsScreen from "./Screens/CommentsScreen";
import MapScreen from "./Screens/MapScreen";
import { useNavigation } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
// import Post from "./Screens/Post";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

const Stack = createStackNavigator();

export default function App() {
  // const navigation = useNavigation();
  // const [authenticated, setAuthenticated] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

    // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     setAuthenticated(user ? "Home" : "Login");
  //   });
  // }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="Comments"
              component={CommentsScreen}
              options={{
                title: "Коментарі",
                headerLeftContainerStyle: { paddingLeft: 16 },
                headerShown: true,
                headerLeft: () => (
                  <Feather
                    name="arrow-left"
                    size={24}
                    color="#212121CC"
                    // onPress={() => navigation.navigate("Posts")}
                  />
                ),
              }}
            />
            <Stack.Screen name="Map" component={MapScreen} />
            {/* <Stack.Screen
              name="Post"
              component={Post}
              options={{
                title: "Публікація",
                headerRightContainerStyle: { paddingRight: 16 },
                headerShown: true,
                headerTintColor: "#212121",
                headerTitleStyle: {
                  fontWeight: 500,
                  fontSize: 17,
                },
                headerTitleAlign: "center",
                headerLeftContainerStyle: { display: "none" },
                headerRight: () => (
                  <Feather
                    name="log-out"
                    size={24}
                    color="#BDBDBD"
                    // onPress={() => navigation.navigate("LoginScreen")}
                  />
                ),
              }}
            /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
