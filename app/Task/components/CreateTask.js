import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ToastAndroid,
  DeviceEventEmitter
} from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from './../../common/BackButton';

import { _height, _width } from '../../common/config';

class CreateTask extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
        title: params ? params.title : 'A Nested Details Screen',
        /**
        * 设置一个空View让标题居中
        */
        headerLeft: <BackButton pop={ navigation.pop } name = {'x'}/>,
        headerRight: <TouchableOpacity style={styles.submit_button} onPress={navigation.getParam('submit')}><Icon name={'check-circle'} size={30} color="#fff"/></TouchableOpacity>,
        headerTitleStyle:{ flex:1, textAlign:'center'}
    };
  };
  state = {
    title: '',
    achademic: '',
    contact: '',
    status: '',
    remark: ''
  };
  _submitForm = () =>{
    var params = this.state;

    if(!params.title || !params.achademic || !params.contact || !params.status){
      ToastAndroid.show('没填完哦', ToastAndroid.SHORT)
      return false
    }

    fetch('http://129.204.128.185:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    })
    DeviceEventEmitter.emit('UPDATE')
    this.props.navigation.goBack();
  }
  componentDidMount (){
    this.props.navigation.setParams({ submit: this._submitForm });
  }
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.wrapper}>
        <TextInput
          label={!this.state.title ? '项目标题' : ''}
          value={this.state.title}
          placeholder='示例: 深度学习'
          style = {{marginVertical: 10, padding: 8, backgroundColor: '#fff'}}
          onChangeText={title => this.setState({ title })}
        />
        <View>
          <TouchableOpacity style={styles.message_box} onPress={()=>{navigate('ChooseList', {'title': '选择学院', callback: ((info)=>{this.setState({achademic: info})}) })}}>
            <Text style={styles.message_box_title}>面向学院</Text>
            <View style={styles.message_box_opt}>
              <Text>{ this.state.achademic || '请选择'}</Text>
              <Icon name="angle-right" size={20} color="#999" style={{marginLeft: 20}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.message_box} onPress={()=>{navigate('ChooseList', { 'title': '选择负责人', callback: ((info)=>{this.setState({contact: info})})})}} >
            <Text style={styles.message_box_title}>项目负责人</Text>
            <View style={styles.message_box_opt}>
              <Text>{ this.state.contact || '请选择'}</Text>
              <Icon name="angle-right" size={20} color="#999" style={{marginLeft: 20}}/>
            </View>
          </TouchableOpacity
          >
          <TouchableOpacity style={styles.message_box} onPress={()=>{navigate('ChooseList', { 'title': '更改状态', callback: ((info)=>{this.setState({status: info})})})}}>
            <Text style={styles.message_box_title}>项目状态</Text>
            <View style={styles.message_box_opt}>
              <Text>{ this.state.status || '未开始'}</Text>
              <Icon name="angle-right" size={20} color="#999" style={{marginLeft: 20}}/>
            </View>
          </TouchableOpacity>
        </View>

        <TextInput
          mode='outlined'
          multiline={true}
          label={'项目描述'}
          numberOfLines = {6}
          value={this.state.remark}
          placeholder='项目描述（选填）'
          style = {{margin: 10, padding: 8, backgroundColor: '#fff'}}
          onChangeText={remark => this.setState({ remark })}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 5,
    padding: 5,
  },
  message_box: {
    padding: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',

    backgroundColor: '#fff',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  message_box_title: {
    fontSize: 17,
    color: '#333'
  },  
  message_box_opt: {
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
    alignItems: 'center',
  },
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between',
  }
});
export default CreateTask;