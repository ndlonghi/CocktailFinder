import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import {MAIN_SCREEN} from "../screens";
import MainScreen from "../../screens/main";

const RootNavigator = createStackNavigator(
  {
    [MAIN_SCREEN]: {
      screen: MainScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: MAIN_SCREEN,
  }
);

export default createAppContainer(RootNavigator);
