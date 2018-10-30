import React, { Component } from 'react';
import {
    View, Text, Image
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import HomeComponent from "./components/HomeComponent";
import SettingsComponent from "./components/SettingsComponent";

let routeConfigs = {
    Home: {
        screen: props => <HomeComponent {...props} />,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, focused }) => (
                focused ?
                    <Image
                        source={require('./icons/home.png')}
                        style={{
                            width: 26, height: 26,
                            tintColor: 'red',
                        }}
                    />
                    :
                    <Image
                        source={require('./icons/home.png')}
                        style={{
                            width: 26, height: 26,
                            tintColor: 'grey',
                        }}
                    />
            )
        }
    },
    SettingsComponent: {
        screen: props => <SettingsComponent {...props} />,
        navigationOptions: {
            tabBarLabel: 'Settings',

        }
    }
};
let tabNavigationOptions = {
    animationEnabled: false,
    swipeEnabled: false,
    showIcon: true,
    upperCaseLabel: false,
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        indicatorStyle: {
            backgroundColor: 'transparent',
        },
        style: {
            backgroundColor: 'white',
            elevation: 0,
            height: 60
        },
        labelStyle: {
            fontSize: 15,
            alignSelf: 'center',
            textAlign: 'center'
        },
        tabStyle: {
            flex: 1,
        },
    }
};
const AppScreen = createBottomTabNavigator(routeConfigs, tabNavigationOptions);

export default class TabParrent extends Component {

    goToGeneralNews = () => {
        this.props.navigation.navigate('GeneralNews')
    }
    render() {
        return (
            <View style={{ flex: 1, }}>
                <AppScreen screenProps={{ goToGeneralNews: this.goToGeneralNews }} />
            </View>
        );
    }
}
