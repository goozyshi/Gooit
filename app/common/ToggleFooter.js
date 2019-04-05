/**
 * 底部工具栏
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import { _height, _width } from './config';

class ToggleFooter extends Component {
  state = {
    arr: []
  };

  /**
   * 开始/继续学习
   */
  _Learning = () => {
    if(this.props.isLearned){
      ToastAndroid.show(this.props.accomplish + '', ToastAndroid.SHORT); // 转为字符串
    }else {
      ToastAndroid.show('1', ToastAndroid.SHORT); // 转为字符串
    }
  };

  render() {
    return (
      <View style={styles.togglebox}>
        <TouchableOpacity style={styles.text_toggle} onPress={()=>this._Learning()}>
          {this.props.isLearned?
            <Text style={{color: '#fff', fontSize: 17,}}>继续学习</Text>
            :
            <Text style={{color: '#fff', fontSize: 17,}}>开始学习</Text>
          }
        </TouchableOpacity>
    </View>
    );
  }
};

const styles = StyleSheet.create({
  togglebox: {
    width: _width,
    height: _height*0.04,
    flexDirection: 'row',
    backgroundColor: '#f5f5f5'
  },
  text_toggle: {
    flex: 1,
    backgroundColor: '#24936E',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ToggleFooter;