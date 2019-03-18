import React, { Component } from 'react';
import { View, Text, WebView, StyleSheet } from 'react-native';

export default class TWebView extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loadError: false
    };
  }

  renderWebView = () => {
    return <WebView style={{marginTop: 0}} source={{uri: this.props.uri}} startInLoadingState={true} onError={() => {this.setState({loadError: true})}}/> 
  }

  renderLoadError = () => {
    return (
      <View style={styles.loadError} >
        <Text style={{fontSize: 20, color: 'red'}}>加载错误!</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loadError ? this.renderLoadError() : this.renderWebView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadError: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});