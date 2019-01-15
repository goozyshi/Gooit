import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { _height, _width } from './config';
/**
 * 吸附头部
 */
const StickyHeader =()=>(
  <View style={styles.sticky_box}>
      <Text style={styles.sticky_title}>我的</Text>
      <View style={styles.clear_box}>
        <Icon name={'trashcan'} size={30} color={'#24292e'} style={styles.setting_icon} />
        <Text style={styles.cachetxt}>缓存2.38M</Text>
      </View>
  </View>
)
const styles = StyleSheet.create({
  sticky_box: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  sticky_title: {
    fontSize: 24, 
    color: '#24292e', 
    fontWeight: '500',
    marginLeft: 20,
  },
  clear_box: {
    marginRight: 35,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  setting_icon: {
    marginRight: 10
  },
  cachetxt: {
    color: '#F75C2F',
    fontSize: 10,
  }
})
export { StickyHeader };
