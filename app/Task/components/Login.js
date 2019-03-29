import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, DeviceEventEmitter} from 'react-native';
import { _height, _width } from '../../common/config';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
  state = {
    dataList: [],
    flag: false
  };
  getRemoteData(){
    fetch('http://129.204.128.185:3000/users')
    .then((response) => response.json())
    .then((responseJson) => {
      let temp =  [...responseJson].reverse()
      this.setState({
        dataList: temp,
        flag: !this.state.flag
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }
  componentWillMount (){
    { this.state.dataList && this.getRemoteData()}
  };
  componentDidMount= () => {
    this.subscription = DeviceEventEmitter.addListener('UPDATE', this.getRemoteData.bind(this))
  };
  componentWillUnmount() {
    this.subscription.remove();
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <View style={styles.container}>
      <FlatList
        data={this.state.dataList}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => 
        <TouchableOpacity style={styles.task_container} key={item.title} onPress={()=>navigate('TaskDetail', {'data': item})}>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
        }
        keyExtractor={item => item.title}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: _height * 0.74,
  },
  task_container: {
    height: _height * 0.11,
    margin: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderLeftWidth: 20,
    borderColor: '#ddd',

  },
  header: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },  
  footer: {
    flex: 0.2,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  }
})