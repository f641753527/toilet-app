import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import utils from '../../../utils';

export default class Category extends Component{

  constructor(props) {
    super(props);
    this.state = {
      list: [ '互联网', '散文', '笑话', '管理' ],
    }
  }

  _onPress = (i) => {
    this.props.navigation.navigate({routeName: 'list', params: { type: i }} );
  }

  render() {
    return (
      <View style={ styles.container }>
          <Text style={ styles.title }>分类</Text>
          <View style={ styles.row } >
            {
              this.state.list.map((v, i)=> <TouchableOpacity onPress={ () => {this._onPress(i+1)}} style={ styles.item } key={i}><Text style={ styles.item_title }>{v}</Text></TouchableOpacity>)
            }
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 10
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
    color: '#252525',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
    flexBasis: (utils.size.width - 40) /2,
    borderWidth: utils.pixelRatio,
    borderColor: '#ccc',
    height: 81,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  item_title: {
    fontSize: 10,
    lineHeight: 20,
    color: '#7f7f83'
  }
});