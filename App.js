import React, { Component } from 'react';
import { BottomNavigation, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Home from './app/Home/index';
import Recents from './app/Recents/index';
import Task from './app/Task/index';
import { _height, _width } from './app/common/config';
class App extends Component {
  state = {
    index: 1,
    routes: [
      { key: 'home', title: 'Home', icon: 'apps',  color: '#24292e' },// color定义底部tab颜色
      { key: 'task', title: 'Task', icon: 'assignment', color: '#24292e' },
      { key: 'recents', title: 'Recents', icon: 'person', color: '#24292e' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: Home,
    task: Task,
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

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: '#F75C2F',
    // accent: '#fff',
  }
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}