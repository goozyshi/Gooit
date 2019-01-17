import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import LoginHint from './components/LoginHint';

class Task extends Component {
  render(){
    return(
      <View>
      <LoginHint/>
      </View>
    )
  }
}
export default Task;