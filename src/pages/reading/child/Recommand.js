import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Fetch from '../../../utils/Fetch';

export default class Recommand extends Component{

  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    Fetch.GET('http://192.168.0.114:3000/client/news/list?type=5').then((res) => {
      const list = res.list || [];
      this.setState({ list });
    });
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.title }>推荐专题</Text>
        <View style={styles.img_list}>
          {
            this.state.list ? this.state.list.map(v => <Image key={v.id} style={styles.img_item} source={{uri: v.cover_img }}></Image>) : null
          }
        </View>
        <Text style={ styles.link }>查看同期专题 > </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingRight: 0
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
    color: '#252525',
  },
  img_list: {
    flexDirection: 'row'
  },
  img_item: {
    flex: 1,
    marginRight: 10,
    height: 100
  },
  link: {
    marginTop: 6,
    fontSize: 12,
    color: '#7f7f83'
  }
});