import React from "react";
import {Image, StyleSheet} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import Button from "../../components/button";

const MainScreen = () => {

  const handleSearchClick = () => {
    console.log('Search button clicked');
  };

  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      colors={['#FF0000', '#FF00FF']}
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
    </LinearGradient>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
