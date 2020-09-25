import React from 'react';
import { View } from 'react-native';
import FacebookScreen from "./screens/FacebookScreen";
import InstagramScreen from "./screens/InstagramScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";

export default class App extends React.Component {
  render() {
  return (
    <View>
      <AppContainer/>
    </View>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screens: FacebookScreen},
  Instagram: {screens: InstagramScreen}
});

const AppContainer = createAppContainer(TabNavigator);