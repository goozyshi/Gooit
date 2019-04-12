import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ToastAndroid,
  DeviceEventEmitter
} from 'react-native';
import { TextInput, List, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from './../../common/BackButton';
import DateTimePicker from 'react-native-modal-datetime-picker';

import { _height, _width } from '../../common/config';

class CreateTask extends Component {
  static navigationOptions = ({ navigation}) => {
    const { params } = navigation.state;
    return {
        title: params ? params.title : '自定义标题',
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
    academy: '',
    contact: '',
    status: '未开始',
    remark: '',
    date_begin: '',
    date_over: '',
    status_color: '#61BCF5',
    announce: '',
    announce_date: '',
    progress: [],
    beginPickerVisible: false,
    overPickerVisible: false,
    type: '老师A'
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
    return year+'/'+month+'/'+day
  }
  addProgress = () => {
    const { type, title, academy, contact, status, remark, date_begin, date_over, progress } = this.state;
    let temp_date = this.getmyDate(new Date())
    var temp_progress = progress;
    let temp_body = ''
    if(this.props.navigation.state.params.data !== undefined){
      let pre_data = this.props.navigation.state.params.data.data;

      { (pre_data.title !== title ) && (temp_body +='修改了项目标题为'+ title+ '\n') }
      { (pre_data.academy !== academy ) && (temp_body +='修改了面向学院为'+ academy+ '\n')}
      { (pre_data.contact !== contact ) && (temp_body +='修改了任务负责人为'+ contact+ '\n') }
      { (pre_data.status !== status ) && (temp_body +='修改了项目状态为'+ status+ '\n') }
      { (pre_data.remark !== remark ) && (temp_body +='修改了项目描述为'+ remark+ '\n') }
      { (pre_data.date_begin !== date_begin ) && (temp_body +='修改了开始时间为'+ date_begin+ '\n') }
      { (pre_data.date_over !== date_over ) && (temp_body +='修改了截止时间为'+ date_over+ '\n') }
      temp_progress.push({title: type+'修改了项目配置', date: temp_date, body: temp_body})
    }else {
      temp_progress.push({title: type+'创建了项目', date: temp_date})
    }
  }

  _submitForm = async () =>{
    const { type, title, academy, contact, status, status_color, remark, date_begin, date_over, announce, announce_date, progress } = this.state;
    var temp_progress = await this.addProgress();

    this.setState({progress: temp_progress},()=>{
      console.log()
      var params = {
        title,
        academy,
        contact,
        status,
        status_color,
        remark,
        date_begin,
        date_over,
        announce,
        announce_date,
        progress
      }
      if(!params.title || !params.academy || !params.contact || !params.status){
        ToastAndroid.show('没填完哦', ToastAndroid.SHORT)
        return false
      }
      if(this.props.navigation.state.params.data !== undefined){
        let index = this.props.navigation.state.params.data.id
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
      }else{
        fetch('http://129.204.128.185:3000/project', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(params)
        })
        .then(()=>{
          DeviceEventEmitter.emit('UPDATE')
          this.props.navigation.goBack();
        })
      }
    })

  };

  componentDidMount (){
    if(this.props.navigation.state.params.data){
      const temp_data = this.props.navigation.state.params.data.data;
      this.setState({
        title: temp_data.title,
        remark: temp_data.remark,
        academy: temp_data.academy,
        contact: temp_data.contact,
        status: temp_data.status,
        status_color: temp_data.status_color,
        date_begin: temp_data.date_begin,
        date_over: temp_data.date_over,
        announce: temp_data.announce,
        announce_date: temp_data.announce_date,
        progress: temp_data.progress
      })
    }

    let date = new Date()
    let mydate = this.getmyDate(date);
    this.setState({
      date_begin: mydate
    })
    
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
          <TouchableOpacity style={styles.message_box} onPress={()=>{navigate('ChooseList', {'title': '选择学院', callback: ((info)=>{this.setState({academy: info})}) })}}>
            <Text style={styles.message_box_title}>面向学院</Text>
            <View style={styles.message_box_opt}>
              <Text>{ this.state.academy || '请选择'}</Text>
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
          <TouchableOpacity style={styles.message_box} onPress={()=>{navigate('ChooseList', { 'title': '更改状态', callback: ((info, color)=>{this.setState({status: info, status_color: color})})})}}>
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
          <List.Accordion title="更多选项(选填)" style={styles.more}>
          <View style={{backgroundColor: '#fff', marginHorizontal: 15}}>
            <TouchableOpacity style={styles.time_opt} onPress={this._showBeginPicker}><Text style={styles.time_text}>开始时间</Text><Text style={styles.time_text}>{this.state.date_begin}</Text></TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.time_opt} onPress={this._showOverPicker}><Text style={styles.time_text}>截止时间</Text><Text style={styles.time_text}>{this.state.date_over}</Text></TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.beginPickerVisible}
              onConfirm={this._handleBeginPicked}
              onCancel={this._hideBeginPicker} />
            <DateTimePicker
              isVisible={this.state.overPickerVisible}
              onConfirm={this._handleOverPicked}
              onCancel={this._hideOverPicker} />
        </View>
          </List.Accordion>
      </View>
    )
  }
  /** 开始日期选择 */
  _showBeginPicker = () => this.setState({ beginPickerVisible: true });

  _hideBeginPicker = () => this.setState({ beginPickerVisible: false });

  _handleBeginPicked = (date) => {
    let current = this.getmyDate(date)
    if(this.state.date_over && this.state.date_over < current){
      ToastAndroid.show('开始时间不能大于结束时间', ToastAndroid.SHORT)
      this._hideBeginPicker()
    }else {
      this.setState({
          date_begin: current
      },()=>this._hideBeginPicker())
    }
  };
  /** 结束日期选择 */
  _showOverPicker = () => this.setState({ overPickerVisible: true });

  _hideOverPicker = () => this.setState({ overPickerVisible: false });

  _handleOverPicked = (date) => {
    let current = this.getmyDate(date)
    if( this.state.date_begin && this.state.date_begin>current){
      ToastAndroid.show('结束时间不能小于开始时间', ToastAndroid.SHORT)
      this._hideOverPicker()
    }else {
      this.setState({
          date_over: current
      },()=>this._hideOverPicker())
    }
  };
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
    alignItems: 'center'
  },
  more: {
    margin: 15,
    backgroundColor: '#fff',
    color: '#333',
    fontSize: 16
  },
  time_opt: {
    margin: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  time_text: {
    color: '#333'
  }
});
export default CreateTask;