import React, {useEffect, useState} from "react";
import {GestureResponderEvent} from "react-native";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {NavigationStackOptions, NavigationStackScreenComponent} from "react-navigation-stack";

import {RootState} from "../../store";
import {Cocktail} from "../../store/cocktails/types";
import Screen from "../../components/screen";
import SearchInput from "../../components/search-input";
import useDebounce from "../../tools/use-debounce";
import {searchCocktails} from "../../store/cocktails/actions";

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

const mapStateToProps = (state: RootState): { screenProps: CocktailsScreenProps } => ({
  screenProps: {
    cocktails: state.cocktails.cocktails,
    fetching: state.cocktails.meta.fetching,
    error: state.cocktails.meta.error
  }
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    searchCocktails
  }, dispatch)
};

const CocktailsScreen: NavigationStackScreenComponent<NavParams, CocktailsScreenProps> = (
  {
    navigation,
    screenProps: {
      cocktails,
      fetching,
      error
    },
    searchCocktails
  }
) => {

  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    searchCocktail(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

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
    setSearchTerm(text.trim());
  };

  const searchCocktail = (searchText: string) => {
    if (searchText.trim().length >= 3) {
      searchCocktails(searchText);
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsScreen);
