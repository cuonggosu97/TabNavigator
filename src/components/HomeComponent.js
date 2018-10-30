import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation'
import NewsScreen from "../screens/NewsScreen";
import InfoScreen from "../screens/InfoScreen";
const TabsNav = new createMaterialTopTabNavigator(
    {
        NewsScreen: {
            screen: props => <NewsScreen {...props} />,
            navigationOptions: {
                tabBarLabel: 'News'
            }
        },
        InfoScreen: {
            screen: InfoScreen,
            navigationOptions: {
                tabBarLabel: 'Info'
            }
        }
    },
    {
        initialRouteName: 'NewsScreen',
        animationEnabled: true,
        swipeEnabled: true,
        showIcon: false,
        upperCaseLabel: false, //duong ke cho tab khi acitve
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'black',
            indicatorStyle: {
                height: 2,
                backgroundColor: 'red',
            },
            style: {
                backgroundColor: 'white',
                elevation: 0,
                height: 50
            },
            labelStyle: {
                fontSize: 15,
                alignSelf: 'center',
                fontWeight: 'bold',
                textAlign: 'center'
            },
            //style cho mỗi tab 
            tabStyle: {
                flex: 1,
                flexDirection: 'row'
            },
        }
    }
)

export default class HomeCoponent extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TabsNav screenProps={{ goToGeneralNews: this.props.screenProps.goToGeneralNews }} />
            </View>
        );
    }
}
