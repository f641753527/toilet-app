import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import TWebView from '../../components/TWebView';

export default class Bathroom extends Component{
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TWebView uri='http://localhost:8081/src/html/location.html'/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});