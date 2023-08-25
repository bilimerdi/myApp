import MainScreen from "./src/screens/MainScreen";
import LoginScreen from "./src/screens/LoginScreen";
import LogUpScreen from "./src/screens/LogUpScreen";
import ProductScreen from "./src/screens/ProductScreen";
import MenuScreen from "./src/screens/MenuScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WeatherScreen from "./src/screens/WeatherScreen";

const navigator = createStackNavigator(
  {
    Main: MainScreen,
    Login: LoginScreen,
    LogUp: LogUpScreen,
    Product: ProductScreen,
    Menu: MenuScreen,
    Weather: WeatherScreen,
  },
  {
    initialRouteName: "Menu",
    defaultNavigationOptions: {
      title: "RizeApp",
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
