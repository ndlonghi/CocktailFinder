import React, {useEffect} from "react";
import {GestureResponderEvent} from "react-native";
import {connect} from "react-redux";
import {NavigationStackOptions, NavigationStackScreenComponent} from "react-navigation-stack";

import {Cocktail, CocktailsState} from "../../store/cocktails/types";
import Screen from "../../components/screen";
import SearchInput from "../../components/search-input";

type NavParams = {
  hideBackButton: boolean;
  onSearchCancel: (event: GestureResponderEvent) => void;
  onSearchTextChange: ((text: string) => void) | undefined;
}

type CocktailsScreenProps = {
  cocktails: Cocktail[];
  fetching: boolean;
  error: boolean;
}

const mapStateToProps = (state: { cocktails: CocktailsState }): {screenProps: CocktailsScreenProps} => ({
  screenProps: {
    cocktails: state.cocktails.cocktails,
    fetching: state.cocktails.meta.fetching,
    error: state.cocktails.meta.error
  }
});

const CocktailsScreen: NavigationStackScreenComponent<NavParams, CocktailsScreenProps> = (
  {
    navigation,
    screenProps: {
      cocktails,
      fetching,
      error
    }
  }
) => {

  useEffect(() => {
    navigation.setParams({
      onSearchCancel,
      onSearchTextChange
    })
  }, []);

  const onSearchCancel = () => {
    navigation.setParams({hideBackButton: false});
  };

  const onSearchTextChange = (text: string) => {
    if (text.trim().length > 0) {
      navigation.setParams({hideBackButton: true});
    }
    console.log(text);
  };

  return (
    <Screen
      safeAreaRender
      reverseBackground
    >

    </Screen>
  );
};

CocktailsScreen.navigationOptions = ({navigation}) => {
  let navigationOptions: NavigationStackOptions = {};
  if (navigation.getParam('hideBackButton')) {
    navigationOptions.headerLeft = null;
  }
  navigationOptions.headerTitle = <SearchInput
    onChangeText={navigation.getParam('onSearchTextChange')}
    onCancel={navigation.getParam('onSearchCancel')}
  />;
  return navigationOptions;
};

export default connect(mapStateToProps)(CocktailsScreen);
