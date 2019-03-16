import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Weather extends Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>天气</Text>
      </View>
    );
  }

}