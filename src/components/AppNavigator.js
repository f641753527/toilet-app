import React, { Component } from 'react';

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Bathroom from '../pages/bathroom';
import Reading from '../pages/reading';
import Weather from '../pages/weather';
import Config from '../pages/config';

import Test from '../pages/test';

const BathRoomNavigator = createStackNavigator({
  bathroom: {
    screen: Bathroom
  },
}, {
  initialRouteName: 'bathroom',
  mode: 'modal',
  headerMode: 'none',
  navigationOptions: {
    tabBarLabel: '洗手间',
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      let IconComponent = Ionicons;
      return <IconComponent name={'md-home'} size={25} color={tintColor} />;
    }
  },
});

const ReadingRoomNavigator = createStackNavigator({
  reading: {
    screen: Reading
  }
}, {
  mode: 'modal',
  headerMode: 'none',
  navigationOptions: {
    tabBarLabel: '阅读',
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      let IconComponent = Ionicons;
      return <IconComponent name={'ios-book'} size={25} color={tintColor} />;
    }
  },
});

const weatherRoomNavigator = createStackNavigator({
  weather: {
    screen: Weather
  }
}, {
  mode: 'modal',
  headerMode: 'none',
  navigationOptions: {
    tabBarLabel: '天气',
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      let IconComponent = Ionicons;
      return <IconComponent name={'ios-partly-sunny'} size={25} color={tintColor} />;
    }
  },
});

const configRoomNavigator = createStackNavigator({
  config: {
    screen: Config
  }
}, {
  mode: 'modal',
  headerMode: 'none',
  navigationOptions: {
    tabBarLabel: '设置',
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      let IconComponent = Ionicons;
      return <IconComponent name={'ios-settings'} size={25} color={tintColor} />;
    }
  },
});





const Tabs = createBottomTabNavigator({ BathRoomNavigator, ReadingRoomNavigator, weatherRoomNavigator, configRoomNavigator }, {
  defaultNavigationOptions: ({navigation }) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      let IconComponent = Ionicons;
      return <IconComponent name={'ios-play'} size={25} color={tintColor} />;
    }
  }),
});

export default createAppContainer(Tabs);