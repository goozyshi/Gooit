/**
 * 底部工具栏
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import { _height, _width } from './config';
import Icon from 'react-native-vector-icons/MaterialIcons';

class ToggleFooter extends Component {
  state = {
    isFavorited: false
  };

  /**
   * 收藏功能
   */
  _onFavorite = () => {
    const { title, banner } = this.props;
    this.setState({isFavorited: !this.state.isFavorited},()=>{
      ToastAndroid.show(title, ToastAndroid.SHORT);
    })
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
    const { isFavorited } = this.state;
    return (
      <View style={styles.togglebox}>
        <TouchableOpacity style={styles.icon} onPress={()=>this._onFavorite()}>
          <Icon 
            name={isFavorited? 'favorite' :'favorite-border'}
            size={34}
            color={'#24936E'}
          />
        </TouchableOpacity>
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
  icon: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_toggle: {
    flex: 0.8,
    backgroundColor: '#24936E',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ToggleFooter;