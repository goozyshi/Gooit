import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View, 
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { _height, _width } from '../../common/config';
class Tools extends Component {
  state = {
    tools_data: [{
      name: '电阻色环',
      id: 0
    },{
      name: '贴片电阻',
      id: 1
    },{
      name: '电感色环',
      id: 2
    },{
      name: '滤波器',
      id: 3
    },{
      name: 'NE555',
      id: 4
    },{
      name: '布尔逻辑门',
      id: 5
    },{
      name: 'ASCII表',
      id: 6
    },{
      name: '接口引脚定义',
      id: 7
    },{
      name: '7400系列IC',
      id: 8
    },{
      name: '更多',
      id: 9
    }]
  }
  render(){
    const { navigate } = this.props.navigation;
    const { tools_data } = this.state;
    return(
      <View style={styles.container}>
        { tools_data.map((item,index)=>(
            <View key={index}>
              <TouchableOpacity onPress={()=>navigate('Caculator')}>
                <View style={styles.tag}>
                  <Icon name="microchip" size={48} color="#24936E" />
                  <Text style={styles.name}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#fff'
  },
  tag: {
    flex: 1,
    width: _width * 0.16,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  name: {
    marginTop: 5,
    fontSize: 13,
  }
});
export default Tools;