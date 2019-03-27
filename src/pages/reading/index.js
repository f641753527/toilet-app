import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import Search from './child/Search';
import Topic from './child/Topic';
import Recommand from './child/Recommand';
import Category from './child/Category';
import List from './child/List';

import Line from '../../components/Line';
export default class Reading extends Component{

  constructor(props) {
    super(props);
    this.state = {
      is_show: false,
    }
  }

  componentDidMount() {
    this.setState({ is_show: true });
    this.props.navigation.addListener('willFocus', this.willFocus);
  }

  willFocus = (payload) => {
    // this.get_list();
    // this.login();
  }

  render() {
    return (
      <View style={ styles.container }>
        <Search/>
        <Line></Line>
        { 
        this.state.is_show ?
          <ScrollView style={ styles.container }>
            <Recommand navigation={this.props.navigation}></Recommand>
            <Line></Line>
            <Topic type={6} navigation={this.props.navigation}></Topic>
            <Category navigation={this.props.navigation}></Category>
            <Topic type={7} navigation={this.props.navigation}></Topic>
          </ScrollView>
        : null
        }
        
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});