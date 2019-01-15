import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import { _height, _width } from '../../common/config'; 
class Foreground extends Component {
  render(){
    return (
      <View style={styles.forebox}>
          <View style={styles.warpper}>
            <Image source={{uri: 'https://img.zcool.cn/community/046cca553f71a100000199876ebc3b.jpg@120w_160h_1c_1e_1o_100sh.jpg'}} style={styles.avatar}/>
            <View>
              <Text style={styles.name}>肯德基</Text>
              <Text style={styles.sub}>电子科学与技术学院</Text>
            </View>
          </View>
          <Text style={styles.exit}>退出</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  forebox: {
    height: _height * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  warpper:{
    alignItems: 'center',
    flexDirection: 'row'    
  },
  avatar: {
    height: 96,
    width: 96,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: 'pink',
    marginLeft: 20,
    marginRight: 15
  },
  name: {
    color: '#333',
    fontWeight: '600',
    fontSize: 24,
  },
  sub: {
    marginTop: 10,
    fontSize: 20, 
    color: '#666',
  },
  exit: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#F75C2F',
    marginRight: 30,
  }
})
export default Foreground;