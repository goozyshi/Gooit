import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';

class SearchDataSheet extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Kohana
          style={styles.input}
          label={'请输入元器件型号'}
          iconClass={MaterialsIcon}
          iconName={'settings-input-component'}
          iconColor={'#f4d29a'} // icon颜色
          labelStyle={styles.label}// 提示placeholder颜色
          inputStyle={{ color: '#91627b' }}// 输入颜色
          useNativeDriver
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#0366d6',
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 3,
    margin: 5
  },
  label: {
    color: '#91627b',
    fontSize: 15
  }
})
export default SearchDataSheet;