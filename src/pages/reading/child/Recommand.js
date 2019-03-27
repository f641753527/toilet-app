import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import TWebView from '../../../components/TWebView';

import Fetch from '../../../utils/Fetch';

export default class Recommand extends Component{

  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    Fetch.GET('/client/news/list?type=5').then((res) => {
      const list = res.list ? res.list.slice(0, 2) : [];
      this.setState({ list });
    });
  }

  _onPress = () => {
    this.props.navigation.navigate({routeName: 'list', params: { type: 5 }} );
  }

  _onItemPress = (item) => {
    this.props.navigation.navigate({routeName: 'detail', params: { uri: item.link }} );
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.title }>推荐专题</Text>
        <View style={styles.img_list}>
          {
            this.state.list ? this.state.list.map(v => (
            <TouchableOpacity key={v.id} style={styles.img_item} onPress={() => {this._onItemPress(v)}}>
              <Image style={styles.img} source={{uri: v.cover_img }}></Image>
            </TouchableOpacity>)) : null
          }
        </View>
        <Text style={ styles.link } onPress={this._onPress}>查看同期专题 > </Text>
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
  img: {
    width: '100%',
    height: '100%'
  },
  link: {
    marginTop: 6,
    fontSize: 12,
    color: '#7f7f83'
  }
});