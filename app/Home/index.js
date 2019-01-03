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
    console.log(this.props)
    return (
      <View>
        <SearchDataSheet/>
        <CareerSwiper navigation={this.props.navigation}/>
      </View>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: CareerInfo
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);
const AppContainer = createAppContainer(RootStack);
class Home extends React.Component {
  render() {
    return <AppContainer />;
  }
}
export default Home;