import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  StyleSheet
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import SearchDataSheet from './components/SearchDataSheet';
import CareerSwiper from './components/CareerSwiper';
import CareerInfo from './components/CareerInfo';
import Caculator from './components/Caculator';
import Edu from './components/Edu';
import Tools from './components/Tools';
import BasicList from './components/BasicList';
import OSList from './components/OSList';
import AlgoList from './components/AlgoList';
import SearchBar from '../common/SearchBar';
import Chip from '../common/Chip';
import PDFView from '../common/PDFView';
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.homecontainer}>
        <StatusBar
          animated ={true}
          backgroundColor="#24936E"//#24936E
          barStyle="light-content"
          hidden={true}
          translucent={true}
        />
        <SearchBar navigation={this.props.navigation}/>
        <ScrollView showsVerticalScrollIndicator={false}>
        <CareerSwiper navigation={this.props.navigation} />
        <Tools navigation={this.props.navigation} />
        <BasicList navigation={this.props.navigation} />
        <OSList navigation={this.props.navigation} />
        <AlgoList navigation={this.props.navigation} />
        </ScrollView>
      </View>
    )
  }
}

const HomeRootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: CareerInfo,
    Caculator: Caculator,
    Edu: Edu,
    SearchDataSheet: SearchDataSheet,
    Chip: Chip,
    PDFView: PDFView
  },
  {
    initialRouteName: 'Home',
    mode: 'card',// 定义页面渲染和转换的风格
    headerMode: 'none',
  }
);

const HomeContainer = createAppContainer(HomeRootStack);
export default class Home extends Component {
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