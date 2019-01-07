import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View, 
  FlatList,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { _height, _width } from '../../common/config';
class Tools extends Component {
  state = {
    data: [{
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
      name: '运算放大器',
      id: 5
    }]
  }
  render(){
    const { navigate } = this.props.navigation;
    return(
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}//  水平进度条
          renderItem={({item}) => 
            <CaculatorTag
              name = {item.name}
              onPress={()=>navigate('Caculator')}
            />}
        />
    )
  }
}
const CaculatorTag = (props) => {
  return(
    <View>
      <TouchableOpacity onPress={ props.onPress }>
        <View style={styles.tag}>
          <Icon name="plane" size={16} color="#eaa8a4" />
          <Text style={styles.name}>
            {props.name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  tag: {
    flex: 1,
    height: _height * 0.04,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 5,
    borderColor: '#eaa8a4',
    borderWidth: 2,
    margin: 10,
    padding: 5,
  },
  name: {
    marginLeft: 10,
    fontSize: 14,
    color: '#666'
  }
});
export default Tools;