import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View, 
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { _height, _width, tools_data } from '../../common/config';
class Tools extends Component {
  state = {
    tools_data: tools_data
  }
  render(){
    const { navigate } = this.props.navigation;
    const { tools_data } = this.state;
    return(
      <View style={styles.container}>
        { tools_data.map((item,index)=>(
            <View key={index}>
              <TouchableOpacity onPress={()=>navigate('Caculator', {'name': item.name})}>
                <View style={[styles.tag, {borderColor: item.color} ]}>
                  <Icon name={item.icon} size={28} color={item.color} />
                  <Text style={{marginTop: 4, fontWeight: '600', fontSize: 12, color: item.color}}>
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
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#fff'
  },
  tag: {
    width: _width * 0.17,
    height: _width * 0.17,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 8,
    borderWidth: 2,
    borderRadius: 200,
  }
});
export default Tools;