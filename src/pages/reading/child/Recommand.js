import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Fetch from '../../../utils/Fetch';

export default class Recommand extends Component{

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.title }>推荐专题</Text>
        <View style={styles.img_list}>
          <Image style={styles.img_item} source={{uri:'http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg' }}></Image>
          <View style={styles.slot}></View>
          <Image style={styles.img_item} source={{uri:'http://hellorfimg.zcool.cn/preview/291148670.jpg' }}></Image>
        </View>
        <Text style={ styles.link }>查看同期专题 > </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
    color: '#252525',
  },
  img_list: {
    flexDirection: 'row'
  },
  slot: {
    width: 10,
    flex: 0
  },
  img_item: {
    flex: 1,
    height: 100
  },
  link: {
    marginTop: 6,
    fontSize: 12,
    color: '#7f7f83'
  }
});