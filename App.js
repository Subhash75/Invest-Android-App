import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Provider } from "react-redux";
import Routes from "./routes";
import { store } from "./store";
import { NavigationContainer } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    MontRegular: require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    MontMedium: require("./assets/fonts/Montserrat/Montserrat-Medium.ttf"),
    MontSemiBold: require("./assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
    MontBold: require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    MontItalic: require("./assets/fonts/Montserrat/Montserrat-Italic.ttf"),
  });

  useEffect(() => {
    const loadFonts = async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    };

    loadFonts();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
