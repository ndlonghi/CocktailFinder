import React, {FunctionComponent} from "react";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../button";
import {getShadowStylesFromElevation} from "../../tools/get-shadow-styles-from-elevation";

interface SearchInputProps extends TextInputProps {
  onCancel: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({onChangeText, onCancel, style}) => {

  return (
    <View
      style={[
        styles.container,
        style
      ]}
    >
      <View style={styles.inputContainer}>
        <Icon
          name="md-search"
          color="darkgrey"
          style={styles.icon}
        />
        <TextInput
          onChangeText={onChangeText}
          style={styles.input}
        />
      </View>
      <Button
        titleColor="red"
        title="Cancel"
        onPress={onCancel}
        style={styles.cancelButton}
      />
    </View>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 8,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#DEDEDE',
    borderRadius: 4,
    padding: 4,
    alignItems: 'center'
  },
  icon: {
    fontSize: 20,
    paddingHorizontal: 8
  },
  input: {
    flex: 1,
    padding: 0,
    fontSize: 16
  },
  cancelButton: {
    ...getShadowStylesFromElevation(0),
    backgroundColor: 'transparent'
  }
});

export default SearchInput;
