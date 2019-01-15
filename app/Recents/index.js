import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Animated
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { _height, _width } from '../common/config';
import { StickyHeader } from '../common/Header';

import Foreground from './components/Foreground';
import FeatureList from './components/FeatureList';
class RecentsScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
        <StickyHeader/>
        <Foreground/>
        <FeatureList/>
      </View>
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