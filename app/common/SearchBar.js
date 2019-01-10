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
  constructor(props) {
    super(props);
    this.state = {
      val: '',
    };
  }
  _onSubmitEditing = async () => {
    const { val } = this.state;
    let reg=/^(?!(\s+$))/    //  模式匹配。输入内容不为纯空格
    if ( val && reg.test(val) ) {
      const result = await this.fetchData( API,val, this.start, this.count);
      this.handleText(result);
    } else {
      ToastAndroid.show("搜索内容不能为空", ToastAndroid.SHORT);
    }
  }
  render() {
    const { val} = this.state;
    return (
        <View style={styles.SearchBar}>
          <InputCell
            val={ val }
            placeholder = {'做毕设好麻烦啊……'}
            updateParentState={(data)=>this.setState(data)}
            _onSubmitEditing={this._onSubmitEditing}
          />
        </View>
    );
  }
}

const InputCell = (props) => {
  const { val, placeholder} = props;
  /**
   * 子组件用来触发回调函数的方法
   */
  setParentState = (data) => {
    props.updateParentState(data);
  };
  _onSubmitEditing = () => {
    props._onSubmitEditing();
  };
  return (
    <View style={styles.InputCell}>
      <View style={styles.inputWrapper}>
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.searchBtn}
          onPress={() => this._onSubmitEditing()}
        >
          <Icon
            name="search"
            color="#777"
            size={30}
          />
        </TouchableOpacity>
        <TextInput
          placeholder={ placeholder }
          value={val}
          blurOnSubmit={true}
          onChangeText={val => this.setParentState({ val })}
          onSubmitEditing={() => this._onSubmitEditing()}
          style={styles.input}
        />
        { (val.length !== 0) && <View style={styles.cancelBtn}><Icon name="close" size={25} color="#494949" onPress={() => this.setParentState({ val: '' })}/></View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBar: {
    width: _width,
    backgroundColor: '#24936E',
    marginTop: 20,// 沉浸
  },
  InputCell: {
    height: _height / 13,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: _height / 13,
  },
  inputWrapper:{
    height: 40,
    lineHeight: 35,
    flexDirection: 'row',
  },
  input: {
    width: '80%',
    paddingLeft: 10,
    backgroundColor: '#f5f5f5',
  },
  searchBtn: {
    width: _height / 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelBtn: {
    flex: 0.1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});