import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import {COCKTAILS, MAIN_SCREEN} from "../screens";
import MainScreen from "../../screens/main";
import Cocktails from "../../screens/cocktails";

const RootNavigator = createStackNavigator(
  {
    [MAIN_SCREEN]: {
      screen: MainScreen,
      navigationOptions: {
        header: null
      }
    },
    [COCKTAILS]: {
      screen: Cocktails
    }
  },
  {
    initialRouteName: MAIN_SCREEN,
  }
);

export default createAppContainer(RootNavigator);
