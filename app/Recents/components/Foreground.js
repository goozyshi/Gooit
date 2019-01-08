import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import { Chip } from 'react-native-paper';

class Foreground extends Component {
  render(){
    return (
      <View style={styles.forebox}>
        <Image source={{uri: 'https://img.zcool.cn/community/01ffc75b1fb5afa8012034f79b3ed3.jpg@1280w_1l_0o_100sh.jpg'}} style={styles.avatar}/>
          <Text style={styles.name}>施泽勇</Text>
          <Text style={styles.num}>电子科学与技术学院</Text>
        <View style={styles.chipbox}>
          <Chip mode="outlined" icon="info">深圳大学</Chip>
          <Chip mode="outlined" icon="info">2015160036</Chip>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  forebox: {
    flex: 1,
    height: 200,
    marginTop:30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'blue',
    marginBottom: 5
  },
  name: {
    color: '#eee',
    fontWeight: '500',
    fontSize: 18,
  },
  num: {
    fontSize: 18, 
    color: '#eee',
  },
  chipbox: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5
  }
})
export default Foreground;