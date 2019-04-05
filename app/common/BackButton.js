import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default BackButton = (props) => 
  <TouchableOpacity onPress={()=>{props.pop()}} style={{ marginLeft: 10}}><Icon name={props.name} size={28} color={'#fff'}/></TouchableOpacity>