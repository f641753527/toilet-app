import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Fetch from '../../../utils/Fetch';

export default class Topic extends Component{

  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    Fetch.GET(`http://192.168.0.114:3000/client/news/list?type=${this.props.type}`).then((res) => {
      const list = res.list || [];
      this.setState({list});
    });
  }

  render() {
    let title = '';
    if (this.props.type === 6) {
      title = '热门推荐';
    } else if (this.props.type === 7) {
      title = '清新一刻';
    }
    return (
      <View style={ styles.container }>
        <Text style={ styles.title }>{title}</Text>
        <View style={ styles.list }>
          {this.state.list && this.state.list.length ? this.state.list.map(v => 
            <View style={ [styles.item] } key={v.id}>
              <Image style={ styles.item_cover_image } source={{uri: v.cover_img}}></Image>
              <Text numberOfLines={2} style={ styles.item_title }>{v.title}</Text>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 0
  },
  title: {
    paddingLeft: 10,
    marginBottom: 10,
    fontSize: 16,
    color: '#252525',
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    flex: 1,
    flexBasis: '20%',
    marginLeft: 10,
    marginBottom: 20,
  },
  item_cover_image: {
    width: '100%',
    height: 100
  },
  item_title: {
    // marginTop: 6,
    fontSize: 10,
    lineHeight: 20,
    color: '#7f7f83'
  }
});