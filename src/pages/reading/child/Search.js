import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import utils from '../../../utils';

export default class Search extends Component{

  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <TextInput style={styles.search} placeholder="搜索" onChangeText={(text) => this.setState({text})}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 14
  },
  search: {
    height: 40,
    borderWidth: utils.pixelRatio,
    borderColor: '#F0F0F0',
    borderRadius: 3,
    color: '#494949',
  }
});