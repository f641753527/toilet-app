import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import Search from './child/Search';
import Topic from './child/Topic';
import Recommand from './child/Recommand';
import Category from './child/Category';
import List from './child/List';

import Line from '../../components/Line';

import Fetch from '../../utils/Fetch';

export default class Reading extends Component{

  constructor(props) {
    super(props);
    this.state = {
      is_show: false,
      hot_list: [],
    }
  }

  componentDidMount() {
    this.setState({ is_show: true });
    this.get_hot_list();
    this.props.navigation.addListener('willFocus', this.willFocus);
  }

  willFocus = (payload) => {
    // this.get_list();
    // this.login();
  }

  get_hot_list = () => {
    const list = [
      {
        id: 1,
        title: '热门推荐1热门推荐1热门推荐1热门推荐1',
        cover_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1694255706,456221263&fm=26&gp=0.jpg',
        link: 'https://www.baidu.com',
      },
      {
        id: 2,
        title: '热门推荐1',
        cover_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1694255706,456221263&fm=26&gp=0.jpg',
        link: 'https://www.baidu.com',
      },
      {
        id: 3,
        title: '热门推荐1',
        cover_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1694255706,456221263&fm=26&gp=0.jpg',
        link: 'https://www.baidu.com',
      },
      {
        id: 4,
        title: '热门推荐1',
        cover_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1694255706,456221263&fm=26&gp=0.jpg',
        link: 'https://www.baidu.com',
      },
      {
        id: 5,
        title: '热门推荐1',
        cover_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1694255706,456221263&fm=26&gp=0.jpg',
        link: 'https://www.baidu.com',
      },
      {
        id: 6,
        title: '热门推荐1',
        cover_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1694255706,456221263&fm=26&gp=0.jpg',
        link: 'https://www.baidu.com',
      },
      {
        id: 7,
        title: '热门推荐1',
        cover_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1694255706,456221263&fm=26&gp=0.jpg',
        link: 'https://www.baidu.com',
      },
      {
        id: 8,
        title: '热门推荐1',
        cover_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1694255706,456221263&fm=26&gp=0.jpg',
        link: 'https://www.baidu.com',
      },
    ];
  this.setState({ hot_list: list });
  }

  render() {
    return (
      <View style={ styles.container }>
        <Search/>
        <Line></Line>
        { 
        this.state.is_show ?
          <ScrollView style={ styles.container }>
            <Recommand></Recommand>
            <Line></Line>
            <Topic title={'热门推荐'} list={this.state.hot_list}></Topic>
            <Category></Category>
            <Topic title={'清新一刻'} list={this.state.hot_list}></Topic>
            <List></List>
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