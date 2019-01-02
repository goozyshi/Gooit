import React, { Component } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class App extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Music', icon: 'queue-music',  color: '#0366d6' },// color定义底部tab颜色
      { key: 'albums', title: 'Albums', icon: 'album', color: '#63c1a0'},
      { key: 'recents', title: 'Recents', icon: 'history', color: '#24292e' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
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