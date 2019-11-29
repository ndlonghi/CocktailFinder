import React from "react";
import {Image, StyleSheet} from "react-native";

import Screen from "../../components/screen";
import Button from "../../components/button";

const MainScreen = () => {

  const handleSearchClick = () => {
    console.log('Search button clicked');
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
