import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Fetch from '../../../utils/Fetch';

export default class Topic extends Component{

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>话题</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});