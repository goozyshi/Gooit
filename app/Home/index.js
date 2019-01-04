import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import ItemBox from '../common/ItemBox';
import SearchDataSheet from './components/SearchDataSheet';
import CareerSwiper from './components/CareerSwiper';
import CareerInfo from './components/CareerInfo';
import Caculator from './components/Caculator';
import Tools from './components/Tools';
class HomeScreen extends Component {
  state = {
    itemList:[{
      title: '实用工具',
      _style: {backgroundColor: '#f5f5f5', flex: 0.25},
      _component: <Tools navigation={this.props.navigation} />,
    }]
  }
  render() {
    return (
      <View style={styles.homecontainer}>
        <SearchDataSheet/>
        <CareerSwiper navigation={this.props.navigation}/>
        { this.state.itemList.map((item)=>{
          return <ItemBox
            key = {item._component}
            title = {item.title}
            subtitle = {item.subtitle}
            _style = {item._style}
            _component = {item._component}
          />
        })}
      </View>
    )
  }
}

const HomeRootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: CareerInfo,
    Caculator: Caculator
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
const styles = StyleSheet.create({
  homecontainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  box: {
    flex: 1
  },
  title: {
    color: '#333',
    fontSize: 16,
    lineHeight: 16
  }
})
export default Home;