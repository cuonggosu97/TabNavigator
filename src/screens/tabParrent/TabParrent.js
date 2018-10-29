import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import Tabchild from "../tabchild/Tabchild"
import News from "../news/News"
const TabsNav = new createBottomTabNavigator(
    {
        Tabchild: {
            screen: props => <Tabchild {...props} />,
            navigationOptions: {
                tabBarLabel: 'Home'
            }
        },
        News: {
            screen: props=> <News {...props}/>,
            navigationOptions: {
                tabBarLabel: 'News'
            }
        }
    },
    {
        initialRouteName: 'Tabchild',
        tabBarOptions: {
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
            // tabStyle: {
            //     flexDirection: 'row'
            // }
        }
    }
)
export default class TabParrent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    gotoDetail = () => {
        // alert("aaa")
        this.props.navigation.navigate('Detail1')
        // this.props.navigation.navigate('VoteDetail', {item})
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TabsNav screenProps={{gotoDetail:this.gotoDetail}} />
            </View>
        );
    }
}
