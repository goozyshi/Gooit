import React, { Component } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from './app/Home/index';
import Recents from './app/Recents/index';
export default class App extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'apps',  color: '#0366d6' },// color定义底部tab颜色
      { key: 'recents', title: 'Recents', icon: 'history', color: '#24292e' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: Home,
    recents: Recents,
  });

  render() {
    return (
      <BottomNavigation
        navigationState = {this.state}
        onIndexChange = {this._handleIndexChange}
        renderScene = {this._renderScene}
        shifting = {true}// 除了选中tab，其他只显示logo，不显示标签
        labeled = {true}// 是否显示标签
        activeColor = {'#fff'} // 标签选中颜色
        barStyle = {{paddingBottom: 0}} // 底部Tab栏样式
      />
    );
  }
}