import MainScreen from "./src/screens/MainScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const navigator = createStackNavigator(
  {
    Main: MainScreen,
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      title: "RizeApp",
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
