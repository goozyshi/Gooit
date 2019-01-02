import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import SearchDataSheet from './components/SearchDataSheet';
import CareerSwiper from './components/CareerSwiper';

class Home extends Component {
  render() {
    return (
      <View>
        <SearchDataSheet/>
        <CareerSwiper/>
      </View>
    )
  }
}

export default Home;