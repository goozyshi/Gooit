import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';
import Home from './app/Home/index';
import Recents from './app/Recents/index';
import { _height, _width } from './app/common/config';
export default class App extends Component {
  state = {
    index: 1,
    routes: [
      { key: 'home', title: 'Home', icon: 'apps',  color: '#24292e' },// color定义底部tab颜色
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
        barStyle = {{}} // 底部Tab栏样式
      />
    );
  }
}