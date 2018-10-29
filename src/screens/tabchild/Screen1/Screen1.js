import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
        // alert(JSON.stringify(this.props.screenProps.gotoDetail))
    }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <TouchableOpacity
                    onPress={()=>this.props.screenProps.gotoDetail()}
                >
                    <Text>Detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
