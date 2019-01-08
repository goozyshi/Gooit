import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
/**
 * 吸附头部
 */
const StickyHeader =()=>(
  <View style={styles.stickybox}>
    <Text style={styles.stickytitle}>深圳大学</Text>
  </View>
)
const styles = StyleSheet.create({
  stickybox: {
    height: 50,
    backgroundColor: '#24292e',
    padding: 4,
  },
  stickytitle: {
    fontSize: 20, 
    color: '#fff', 
    fontWeight: '500',
    textAlign: 'center'
  }
})
export { StickyHeader };
