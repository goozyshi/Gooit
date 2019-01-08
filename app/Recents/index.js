import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { _height, _width } from '../common/config';
import { StickyHeader } from '../common/Header';
import Foreground from './components/Foreground';
class RecentsScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ParallaxScrollView
        backgroundColor="#81C7D4"
        contentBackgroundColor="pink"
        showVerticalScrollIndicator={false}
        parallaxHeaderHeight={_height*0.4}
        renderForeground={() => <Foreground/>}
        // stickyHeaderHeight={_height*0.39}
        // renderStickyHeader={() => <StickyHeader/>}
        >
        <View style={{ height: 500 }}>
          <Text>Scroll me</Text>
        </View>
      </ParallaxScrollView>
    )
  }
}
const RecentsRootStack = createStackNavigator(
  {
    Recents: RecentsScreen,
  },
  {
    initialRouteName: 'Recents',
    headerMode: 'none'
  }
);
const RecentsContainer = createAppContainer(RecentsRootStack);
class Recents extends Component {
  render() {
    return <RecentsContainer />;
  }
}
export default Recents;