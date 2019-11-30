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

`redux-thunk`: this library is used to dispatch async actions into the redux store.

`react-native-linear-gradient`: to implement the background gradient.

`react-native-vector-icons`: this is used to easily add icon sets.

`react-navigation`: this library is used for navigation between screens and also requires other libraries: `react-native-reanimated`, `react-native-screens`, `react-native-gesture-handler` and `react-navigation-stack`.

## Improvements

There are many ways the code could be improved in case the app scales.

1. Create general styles and themes for colors, fonts, sizes, etc.

2. Add a library to handle api calls like axios.

3. In case of big amounts of data there are two possible actions: implement pagination and render a virtualized list.
