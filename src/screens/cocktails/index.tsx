import React, {useEffect, useState} from "react";
import {ActivityIndicator, GestureResponderEvent, ScrollView, StyleSheet, Text} from "react-native";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {NavigationStackOptions, NavigationStackScreenComponent} from "react-navigation-stack";

import {RootState} from "../../store";
import {Cocktail} from "../../store/cocktails/types";
import Screen from "../../components/screen";
import SearchInput from "../../components/search-input";
import useDebounce from "../../tools/use-debounce";
import {receiveCocktails, searchCocktails} from "../../store/cocktails/actions";
import CocktailItem from "../../components/cocktail-item";

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
    receiveCocktails,
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
    receiveCocktails,
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
    });
    return () => {
      receiveCocktails([]);
    }
  }, []);

  const onSearchCancel = () => {
    receiveCocktails([]);
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
      <ScrollView contentContainerStyle={styles.container}>
        {fetching &&
        <ActivityIndicator
          size="large"
          style={styles.activityIndicator}
        />
        }
        {error ?
        <Text>
          There has been an unexpected error while fetching the cocktails. Please try again later.
        </Text> :
          cocktails.map((cocktail: Cocktail) =>
            <CocktailItem
              key={cocktail.idDrink}
              cocktail={cocktail}
            />
          )
        }
      </ScrollView>
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 30
  },
  activityIndicator: {
    marginVertical: 10
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsScreen);
