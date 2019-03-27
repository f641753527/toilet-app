import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import TWebView from '../../../components/TWebView';

export default class Detail extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      uri: '',
    }
  }

  componentDidMount() {
    const uri = this.props.navigation.getParam('uri');
    this.setState({uri});
  }

  render() {
    return (
      <TWebView uri={this.state.uri}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});