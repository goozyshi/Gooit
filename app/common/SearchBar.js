import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
//  第三方库
import Icon from 'react-native-vector-icons/EvilIcons';
import { _height, _width } from './config';
export default class SearchBar extends Component {
  state = {
    val: '',
  };
  render() {
    const { val } = this.state;
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.SearchBar}>
          <View style={styles.InputCell}>
            <View style={styles.inputWrapper}>
              <View style={styles.searchBtn}><Icon name="search" color="#777" size={30} /></View>
              <TextInput
                style={styles.input}
                placeholder={'做毕设好麻烦啊……'}
                value={val}
                fontStyle={val.length == 0 ? 'italic' : 'normal'}// 通过判断val的字符长度来决定placeholder的样式
                onFocus={()=>navigate('SearchDataSheet')}
              />
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  SearchBar: {
    width: _width,
    backgroundColor: '#24936E',
    // marginTop: 20,// 沉浸
  },
  InputCell: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: '#f5f5f5',
    borderRadius: _height / 13,
  },
  inputWrapper:{
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 30,
    width: _width * 0.65,
    padding: 0,
    backgroundColor: '#f5f5f5',
  },
  searchBtn: {
    width: _height / 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fef',
    borderRadius: 40,
  },
});