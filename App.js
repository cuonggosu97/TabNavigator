import React, { Component } from 'react';
import { SafeAreaView } from "react-native";
import { StackNavigator } from "react-navigation";
import TabFull from "./src/TabFull"
import GeneralNews from "./src/screens/GeneralNews";

let routeConfigs = {
  TabFull: {
    screen: TabFull
  },
  GeneralNews: {
    screen: GeneralNews
  }
};
let tabNavigationOptions = {
  initiaRouteName: 'TabFull',
  headerMode: 'none'
};

const AppNavigation = StackNavigator(routeConfigs, tabNavigationOptions);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigation />
      </SafeAreaView >
    );
  }
}