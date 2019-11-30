import React, {FunctionComponent} from "react";
import {GestureResponderEvent, StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {ColorProperty} from "csstype";
import {getShadowStylesFromElevation} from "../../tools/get-shadow-styles-from-elevation";

type ButtonProps = {
  titleColor?: ColorProperty;
  title: string;
  iconName?: string;
  iconColor?: ColorProperty;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

const Button: FunctionComponent<ButtonProps> = ({titleColor = 'black', title, iconName, iconColor, onPress, style}) => {

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[
        styles.container,
        style
      ]}
    >
      <>
        {iconName &&
        <Icon
          name={iconName}
          color={iconColor}
          style={styles.icon}
        />
        }
        <Text style={{
          ...styles.title,
          color: titleColor
        }}>
          {title}
        </Text>
      </>
    </TouchableOpacity>
  )

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...getShadowStylesFromElevation(5)
  },
  icon: {
    fontSize: 26,
    paddingRight: 30
  },
  title: {
    fontSize: 16
  }
});

export default Button;
