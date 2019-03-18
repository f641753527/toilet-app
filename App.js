import React, {Component} from 'react';

import AppContainer from './src/components/AppNavigator';

export default class App extends Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppContainer/>
    );
  }
}