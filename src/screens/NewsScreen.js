import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class NewsScreen extends Component {
    render() {
        let dataSendToDetail = {
            name: "Star Wars",
            releaseYear: 1977
        };

        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity
                    onPress={() => this.props.screenProps.goToGeneralNews(dataSendToDetail)}
                >
                    <Text>Go to Gerenal News </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
