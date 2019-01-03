import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import SearchDataSheet from './components/SearchDataSheet';
import CareerSwiper from './components/CareerSwiper';
import CareerInfo from './components/CareerInfo';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <SearchDataSheet/>
        <CareerSwiper navigation={this.props.navigation}/>
      </View>
    )
  }
}

const HomeRootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: CareerInfo
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);
const HomeContainer = createAppContainer(HomeRootStack);
class Home extends Component {
  render() {
    return <HomeContainer />;
  }
}
export default Home;