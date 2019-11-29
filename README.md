# CocktailFinder
React Native app to find cocktails.

This app was created using the typescript template with `@react-native-community/cli`. 

## Installation

To run this application you must have the environment set up as described in the 'Getting Started' section in the official docs: `https://facebook.github.io/react-native/docs/getting-started`

Then run `npm install` to install all dependencies.

And finally `npm run android` or `npm run ios` depending on which platform you want to run it on.

## Used libraries description

In this section we can see a list of all used libraries and why they are being used.

`redux`: to store state of the application globally having a single source of truth.

`react-redux`: to integrate the functionality of redux with the react application. Although this is not required, it makes integration easier.

`react-native-linear-gradient`: to implement the background gradient.

`react-native-vector-icons`: this is used to easily add icon sets.

`react-navigation`: this library is used for navigation between screens and also requires other libraries: `react-native-reanimated`, `react-native-screens`, `react-native-gesture-handler` and `react-navigation-stack`.
