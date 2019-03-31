import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, DeviceEventEmitter} from 'react-native';
import { _height, _width } from '../../common/config';
import Icon from 'react-native-vector-icons/Feather';

export default class TaskList extends Component {
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
        <TouchableOpacity style={[styles.task_container, {borderColor: item.status_color}]} key={item.title + item.date_begin} onPress={()=>navigate('TaskDetail', {'data': item})}>
          <View style={styles.header}>
            <Icon name="info" size={20} color={item.status_color} style={{marginRight: 8}}/>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.header}>
            <Icon name="user" size={20} color={item.status_color} style={{marginRight: 8}}/>
            <Text>{item.contact}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.item}>
              <Icon name="activity" size={20} color={item.status_color} style={{marginRight: 8}}/>
              <View style={{borderWidth:1, paddingHorizontal: 10, borderColor: item.status_color, borderRadius: 40}}>
                <Text style={styles.status}>{item.status}</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Icon name="layers" size={20} color={item.status_color} style={{marginRight: 8}}/>
              <Text style={styles.status}>{item.academy}</Text>
            </View>
            <View style={styles.item}>
              <Icon name="calendar" size={20} color={item.status_color} style={{marginRight: 8}}/>
              <Text>{item.date_begin || ''} - {item.date_over || ''}</Text>
            </View>
          </View>
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
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderLeftWidth: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  footer: {
    margin: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})