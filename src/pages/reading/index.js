import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Fetch from '../../utils/Fetch';

export default class Reading extends Component{

  constructor(props) {
    super(props);

    Fetch.GET('http://192.168.0.114:3000/client/news/list');

    Fetch.POST('http://192.168.0.114:3000/admin/user/login', {
      body: {
        user_name: '1234',
        password: '23432'
      }
    });
  }

  componentDidMount() {
    this.props.navigation.addListener('willFocus', this.willFocus);
  }

  willFocus = (payload) => {
    console.log(payload);
  }

  render() {
    return (
      <View>
        <Text>阅读</Text>
      </View>
    );
  }
}