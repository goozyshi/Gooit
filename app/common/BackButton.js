import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class BackButton extends Component {
  render(){
    const { pop }  =this.props;
    return(
      <TouchableOpacity onPress={()=>{pop()}} style={{ marginLeft: 10}}>
        <Icon name={'chevron-left'} size={32} color={'#fff'}/>
      </TouchableOpacity>
    )
  }
}
export default BackButton;