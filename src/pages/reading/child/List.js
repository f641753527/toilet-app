import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

import Fetch from '../../../utils/Fetch';
import utils from '../../../utils';

export default class List extends Component{

  static navigationOptions = ({ navigation }) => {

    return {
      title: 'New User',
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    const type = this.props.navigation.getParam('type');
    Fetch.GET(`/client/news/list?type=${type}`).then((res) => {
      const list = res && res.list ? res.list : [];
      this.setState({list});
    });
  }

  _onItemPress = (item) => {
    this.props.navigation.navigate({routeName: 'detail', params: { uri: item.link }} );
  }

  render() {
    return (
      <FlatList
        data={this.state.list}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={() => {this._onItemPress(item)}}>
            <Image style={styles.cover_img} source={{uri: item.cover_img}}></Image>
            <View>
              <Text numberOfLines={1}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: utils.pixelRatio,
  },
  cover_img: {
    flexGrow: 0,
    flexBasis: 100,
    height: 100,
    marginRight: 10,
  }
});