import React, { Component } from 'react';
import { DeviceEventEmitter } from 'react-native';
import { BottomNavigation, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Home from './app/Home/index';
import My from './app/My/index';
import Task from './app/Task/index';
import { _height, _width } from './app/common/config';
class App extends Component {
  state = {
    index: 2,
    routes: [
      { key: 'home', title: '首页', icon: 'home' },// color定义底部tab颜色
      { key: 'task', title: '任务', icon: 'assignment' },
      { key: 'my', title: '我的', icon: 'account-circle' },
    ],
    customcolor: '#332'
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: Home,
    task: Task,
    my: My,
  });
  componentDidMount(){
    DeviceEventEmitter.addListener("colorMaker", (color) => {
      this.setState({
        customcolor: color,
      },()=>{
        theme.colors.primary = this.state.customcolor
      })
    })
  }
  render() {
    return (
      <BottomNavigation
        navigationState = {this.state}
        onIndexChange = {this._handleIndexChange}
        renderScene = {this._renderScene}
        shifting = {true}// 除了选中tab，其他只显示logo，不显示标签
        labeled = {false}// 是否显示标签
        activeColor = {'#fff'} // 标签选中颜色
      />
    );
  }
}
let theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#24292e',
    accent: '#fff',
  }
};
export default function Main() {
  return (
    <PaperProvider theme={theme} >
      <App  />
    </PaperProvider>
  );
}