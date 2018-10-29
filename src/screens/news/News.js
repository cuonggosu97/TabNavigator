import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  // componentDidMount = () => {
  //   alert(this.props.screenProps.a)
  // };
  
  render() {
    return (
      <View>
        <Text> News </Text>
      </View>
    );
  }
}
