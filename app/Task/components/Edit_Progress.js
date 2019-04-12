import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, DeviceEventEmitter, ToastAndroid} from 'react-native';
import BackButton from '../../common/BackButton';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import { _height, _width } from '../../common/config';


export default class Edit_Progress extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.title : '初始标题',
      /**
      *设置一个空View让标题居中
      **/
      headerLeft: <BackButton pop={ navigation.pop } name = {'x'}/>,
      headerRight: <TouchableOpacity style={styles.submit_button} onPress={navigation.getParam('submit')}><Icon name={'check-circle'} size={30} color="#fff"/></TouchableOpacity>,
      headerTitleStyle:{ flex:1,textAlign:'center' },
    };
  };

  state = {
    title: '',
    body: '',
    progress: [],
    type: 'B'
  };

  getmyDate(date) {
    date = new Date(date)
    var year = date.getFullYear().toString();
    var month = (date.getMonth()+1).toString();
    if (month<10){
      month = '0' + month
    }
    var day = date.getDate().toString();
    if (day<10){
      day = '0' + day
    }
    var hour = date.getHours().toString();
    var min = date.getMinutes().toString();
    return year +'年'+ month +'月'+ day +'日' + hour + '小时' + min + '分'
  }

  _submitForm = () => {
    const { title, type, body, progress } = this.state;
    if(!title){
      ToastAndroid.show('请填写标题', ToastAndroid.SHORT)
      return false
    }
    let date = this.getmyDate(new Date())
    let { data, index } = this.props.navigation.state.params
    let params = data;
    let temp_progress = progress;
    temp_progress.push({'title': type +'添加进度：' + title, 'body': body, 'date': date})

    this.setState({
      progress: temp_progress,
    },()=>{
      params['progress'] = this.state.progress
      fetch('http://129.204.128.185:3000/project/' + index, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      })
      .then(()=>{
        DeviceEventEmitter.emit('UPDATE')
        this.props.navigation.pop(2);
      })
    })
}
  componentDidMount() {
    this.props.navigation.setParams({ submit: this._submitForm });
    let temp_progress = this.props.navigation.state.params.data.progress;
    let temp_type = this.props.navigation.state.params.type;
    this.setState({type: temp_type},()=>{
      temp_progress && this.setState({progress: temp_progress})
    })
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          label={!this.state.title ? '进度标题' : ''}
          value={this.state.title}
          placeholder='示例: 学习基本语法'
          style = {{margin: 10, padding: 8, backgroundColor: '#fff'}}
          onChangeText={title => this.setState({ title })}
        />

        <TextInput
          mode='outlined'
          multiline={true}
          label={'具体细节'}
          numberOfLines = {6}
          value={this.state.body}
          placeholder='示例：了解 for 、 while 、do while的区别（选填）'
          style = {{margin: 10, padding: 8, backgroundColor: '#fff'}}
          onChangeText={body => this.setState({ body })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: _height * 0.8,
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
  },
  submit_button: {
    height: 44,
    paddingRight:15,
    color: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
})