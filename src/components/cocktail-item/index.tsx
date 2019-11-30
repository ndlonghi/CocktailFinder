import React, {FunctionComponent} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {getShadowStylesFromElevation} from "../../tools/get-shadow-styles-from-elevation";
import {Cocktail} from "../../store/cocktails/types";

type CocktailProps = {
  cocktail: Cocktail;
}

const CocktailItem: FunctionComponent<CocktailProps> = ({cocktail}) => {

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{uri: cocktail.strDrinkThumb}}
        style={styles.thumb}
      />
      <Text style={styles.title}>
        {cocktail.strDrink}
      </Text>
    </View>
  )

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 6,
    marginVertical: 5,
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    ...getShadowStylesFromElevation(5)
  },
  thumb: {
    height: 80,
    width: 80,
    borderRadius: 140,
    marginRight: 16
  },
  title: {
    flex: 1,
    fontSize: 24
  }
});

export default CocktailItem;
