import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import utils from '../utils';

export default class Line extends Component{
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderTopWidth: 0
  }
});
