import React, { Component } from 'react';
import { View } from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';

class SearchDataSheet extends Component {
  render(){
    return(
      <View style={{height: 50, marginBottom: 10}}>
        <Kohana
          style={{ backgroundColor: '#f9f5ed' }}
          label={'请输入元器件型号'}
          iconClass={MaterialsIcon}
          iconName={'settings-input-component'}
          iconColor={'#f4d29a'}
          labelStyle={{ color: '#91627b' }}
          inputStyle={{ color: '#91627b' }}
          useNativeDriver
        />
      </View>
    )
  }
}
export default SearchDataSheet;