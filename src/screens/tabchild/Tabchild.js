import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator, TabNavigator } from 'react-navigation'
import Screen1 from "./Screen1/Screen1"
import Screen2 from "./Screen2/Screen2"
const TabsNav = new createMaterialTopTabNavigator(
    {
        Screen1: {
            screen: props => <Screen1 {...props}/>,
            navigationOptions: {
                tabBarLabel: 'Màn 1'
            }
        },
        Screen2: {
            screen: Screen2,
            navigationOptions: {
                tabBarLabel: 'Màn 2'
            }
        }
    },
    {
        initialRouteName:'Screen1',
        tabBarOptions:{
            activeTintColor: '#00AEEF',
            style: {
                backgroundColor: 'white',
                elevation: 0,
            },
            inactiveTintColor: '#777777',
            upperCaseLabel: false,
            indicatorStyle: {
                backgroundColor: '#00AEEF',
            },
            showIcon: true,
            labelStyle: {
                fontSize: 15
            },
            //style cho mỗi tab 
            tabStyle: {
                flexDirection: 'row'
            }
        }
    }
)

export default class TabChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
        // alert(this.props.screenProps.gotoDetail)
    }
    render() {
        return (
            <View style={{ flex: 1}}>
                <TabsNav screenProps = {{ gotoDetail: this.props.screenProps.gotoDetail}}/>
                {/* <TabsNav a={{a: 'aaaa'}}/> */}
            </View>
        );
    }
}
