import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import ItemBox from '../common/ItemBox';
import SearchDataSheet from './components/SearchDataSheet';
import CareerSwiper from './components/CareerSwiper';
import CareerInfo from './components/CareerInfo';
import Caculator from './components/Caculator';
import Edu from './components/Edu';
import Tools from './components/Tools';
import CardList from './components/CardList';
class HomeScreen extends Component {
  state = {
    itemList:[{
      title: '编程-基础',
      _style: {marginTop: 5},
      _component: <CardList navigation={this.props.navigation} />,
    }]
  }
  render() {
    return (
      <ScrollView style={styles.homecontainer}>
        <SearchDataSheet/>
        <CareerSwiper navigation={this.props.navigation} />
        <Tools navigation={this.props.navigation} />
        <CardList navigation={this.props.navigation} />
        <View>
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
      </ScrollView>
    )
  }
}

const HomeRootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: CareerInfo,
    Caculator: Caculator,
    Edu: Edu
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
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
    backgroundColor: '#f5f5f5'
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