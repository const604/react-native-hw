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
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { auth } from "./firebase/config";

const Stack = createStackNavigator();

export default function App() {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    // const user = auth.currentUser;
    // console.log(user)
    // if (user) {
    //   setAuthenticated("Home");
    // }else{
    //   setAuthenticated("Login");}

    auth.onAuthStateChanged((user) => {
      setAuthenticated(user ? "Home" : "Login");
    });
  }, []);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {authenticated && (
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName={authenticated}
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="Registration"
                component={RegistrationScreen}
              />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen
                name="Comments"
                component={CommentsScreen}
                options={({ navigation }) => ({
                  title: "Коментарі",
                  headerTitleAlign: "center",
                  headerLeftContainerStyle: { paddingLeft: 16 },
                  headerShown: true,
                  headerLeft: () => (
                    <Feather
                      name="arrow-left"
                      size={24}
                      color="#212121CC"
                      onPress={() => navigation.navigate("Posts")}
                    />
                  ),
                })}
              />
              <Stack.Screen name="Map" component={MapScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        )}
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
