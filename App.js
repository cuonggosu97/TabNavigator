/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";
// import Tabchild from "./src/screens/tabchild/Tabchild"
import Tabparrent from "./src/screens/tabParrent/TabParrent"
import Screen2 from"./src/screens/tabchild/Screen2/Screen2"
import Detail1 from "./src/screens/tabchild/Screen1/Detail1"
import Splash from "./src/screens/Splash"
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// const Tab = StackNavigator({
//   Main: {
//     screen: Tabparrent
//   }
// },{
//   // mode:'none',
// })

const AppNavigator = StackNavigator({
  Splash: {
    screen: Splash
  },
  Tabparrent: {
    screen: Tabparrent
  },
  Detail1: {
    screen: Detail1
  },
}, {
    initialRouteName: 'Splash',
    headerMode:'none'
  })
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'green' }}>
        <StatusBar hidden />
        <AppNavigator />
      </View>

    );
  }
}

