import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ToastAndroid
} from 'react-native';
import LoginHint from './components/LoginHint';
import Login from './components/Login';
import PDFView from '../common/PDFView';
class Task extends Component {
 async componentWillMount() {
    let re = await AsyncStorage.getItem('logged_user')
    ToastAndroid.show(re, ToastAndroid.SHORT);
  };
  render(){
    return(
      <View style={{flex:1}}>
        {/* <LoginHint/> */}
        <Login/>
        <PDFView />
      </View>
    )
  }
}
export default Task;