import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
class Foreground extends Component {
  render(){
    return (
      <View style={styles.forebox}>
        <Image source={{uri: 'https://img.zcool.cn/community/046cca553f71a100000199876ebc3b.jpg@160w_160h_1c_1e_1o_100sh.jpg'}} style={styles.avatar}/>
        {/* <Image source={{uri: 'https://img.zcool.cn/community/01653d564fd2ef32f87512f6043a97.jpg@1280w_1l_2o_100sh.jpg'}} style={styles.avatar}/> */}
          <Text style={styles.name}>花泽香菜·恋爱循环</Text>
          <Text style={styles.num}>电子科学与技术学院</Text>
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
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: 'pink',
    marginBottom: 5
  },
  name: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 24,
  },
  num: {
    margin: 3,
    fontSize: 18, 
    color: '#eee',
  },
  chipbox: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
})
export default Foreground;