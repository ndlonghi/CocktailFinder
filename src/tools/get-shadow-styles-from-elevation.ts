import {ShadowPropTypesIOSStatic} from "react-native";

interface Shadow extends ShadowPropTypesIOSStatic {
  elevation: number;
}

export function getShadowStylesFromElevation(elevation: number): Shadow {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: .5 * elevation
    },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  }
}
