import React, {FunctionComponent} from "react";
import {Image, StyleSheet} from "react-native";
import {NavigationStackProp} from "react-navigation-stack";

import Screen from "../../components/screen";
import Button from "../../components/button";
import {COCKTAILS} from "../../navigation/screens";

interface MainScreenProps {
  navigation: NavigationStackProp
}

const MainScreen: FunctionComponent<MainScreenProps> = ({navigation}) => {

  const handleSearchClick = () => {
    navigation.navigate(COCKTAILS);
  };

  return (
    <Screen
      barStyle="light-content"
      style={styles.container}
    >
      <Image
        resizeMode="contain"
        source={require('../../assets/imgs/cocktail-finder-logo.png')}
        style={styles.logo}
      />
      <Button
        title="Search your favorite cocktail"
        iconName="md-search"
        iconColor="#FF00FF"
        onPress={handleSearchClick}
        style={styles.searchButton}
      />
    </Screen>
  );

};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  logo: {
    width: '50%',
    marginVertical: 10
  },
  searchButton: {
    width: '100%',
    marginVertical: 10
  }
});

export default MainScreen;
