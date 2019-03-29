import React, { Component } from 'react';
import {
  View,
  AsyncStorage,
  ToastAndroid,
  Text
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { _height, _width } from '../common/config';

import User from './components/User';
import FeatureList from './components/FeatureList';
class MyScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
        <User/>
        <FeatureList/>
      </View>
    )
  }
}
const MyRootStack = createStackNavigator(
  {
    My: MyScreen,
  },
  {
    initialRouteName: 'My',
    headerMode: 'screen',
    mode: 'card',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#24292e',
      },
      title: '我的',
      /**
      *设置一个空View让标题居中
      **/
      headerLeft: (
        <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
      ),
      headerRight: (
        <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
      ),
      headerTitleStyle:{
        flex:1,
        textAlign:'center',
        fontWeight: 'bold',
      },
      headerTintColor: '#fff',
    },
  }
);
const MyContainer = createAppContainer(MyRootStack);
class My extends Component {
  render() {
    return <MyContainer />;
  }
}
export default My;