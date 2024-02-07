import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SuccessMessage from "./Pages/SuccessMessage";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // marginTop: StatusBar.currentHeight,
        // marginTop:"2%",
        // padding: "2%",
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false, statusBarColor:"black"}}
        >
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="SuccessMessage" component={SuccessMessage} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;