import React, {FunctionComponent} from "react";
import {
  StatusBar,
  StatusBarStyle,
  StyleProp,
  StyleSheet,
  ViewStyle
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {ColorProperty} from "csstype";
import {SafeAreaView} from "react-navigation";

type ScreenProps = {
  safeAreaRender?: boolean;
  headerColor?: ColorProperty;
  barStyle?: StatusBarStyle;
  reverseBackground?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Screen: FunctionComponent<ScreenProps> = (
  {
    children,
    safeAreaRender = false,
    headerColor = 'white',
    barStyle = 'dark-content',
    reverseBackground = false,
    style
  }
) => {

  const start = {x: 0, y: 1};
  const end = {x: 1, y: 0};

  return (
    <LinearGradient
      start={reverseBackground ? end : start}
      end={reverseBackground ? start : end}
      colors={['#FF0000', '#FF00FF']}
      style={[
        styles.container,
        style
      ]}
    >
      <StatusBar
        translucent={!safeAreaRender}
        backgroundColor={safeAreaRender ? headerColor : "transparent"}
        barStyle={barStyle}
      />
      {safeAreaRender ?
        <SafeAreaView style={styles.safeAreaContainer}>
          {children}
        </SafeAreaView> :
        children
      }
    </LinearGradient>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeAreaContainer: {
    flex: 1
  }
});

export default Screen;
