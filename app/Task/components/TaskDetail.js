import React, { Component } from 'react';
import { View, Text, StyleSheet, ToastAndroid, TouchableOpacity, DeviceEventEmitter } from 'react-native';
import { Card, TextInput, Divider } from 'react-native-paper';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Feather';
import StepIndicator from 'react-native-step-indicator';
import Dynamic from './Dynamic';
import { _height, _width, stepIndicatorStyles } from '../../common/config';
import BackButton from '../../common/BackButton';

export default class TaskDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    console.log('navigation', navigation)
    let type = navigation.state.params.type;
    return {
      title: navigation.getParam('HeaderTitle', '项目详情'),// 前面是传过来的标题，后面是备用
      /**
      *设置一个空View让标题居中
      **/
      headerLeft: <BackButton pop={ navigation.pop } name = {'chevron-left'}/>,
      headerRight: ( type==='老师A' ?
        <TouchableOpacity style={styles.edit_button} onPress={()=>navigation.navigate('CreateTask', {'data': navigation.state.params})}><Icon name={'edit'} size={20} color="#fff"/></TouchableOpacity>
        :
        <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
      ),
      headerTitleStyle:{
        flex:1,
        textAlign:'center',
      },
    };
  };
  state = {
    data: [],
    index: '',
    type: 'A',
    announce: '',
    announce_date: '',
    flag: false,
    currentPage:0,
    progress: []
  };

  componentDidMount = () => {
    const temp_data = this.props.navigation.state.params.data;
    const temp_index = this.props.navigation.state.params.id;
    const temp_type = this.props.navigation.state.params.type;
    this.setState({
      data: temp_data,
      index: temp_index,
      announce: temp_data.announce,
      announce_date: temp_data.announce_date,
      flag: !this.state.flag,
      progress: temp_data.progress,
      type: temp_type
    })
  }

  addAnnounce = () => {
    if(!this.state.announce){
      return false
    }
    let index = this.state.index;
    let params = this.state.data;
    let temp_date = new Date()
    let date = this.getmyDate(temp_date);
    this.setState({announce_date: date},()=>{
      params['announce'] = this.state.announce;
      params['announce_date'] = this.state.announce_date;
      fetch('http://129.204.128.185:3000/project/' + index, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      })
    })
  }
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
  render() {
    const { data, progress, type } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Card style={styles.banner}>
          <View style={styles.box_head}>
            <Text style={styles.title}>{ data.title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="volume-2" size={25} color={'red'}/>
              <Text style={styles.remark}>{ this.state.announce_date}</Text></View>
            </View>
          <View>
            <TextInput
              mode='outlined'
              numberOfLines = {3}
              style = {{padding: 5, color: '#333'}}
              multiline={true}
              disabled={this.state.type !== '老师A'}
              label={'项目公告'}
              value={this.state.announce}
              placeholder='示例: 下午在电子楼505开会。'
              onChangeText={announce => this.setState({ announce })}
              onBlur={()=>this.addAnnounce()}
            />
         </View>
        </Card> 
        <ScrollableTabView
          initialPage={0}
          tabBarActiveTextColor={data.status_color}// 标签选择颜色
          tabBarInactiveTextColor={'#777'} // 标签未选中颜色
          tabBarUnderlineStyle={{backgroundColor: data.status_color, height:2}}// 下划线样式
          renderTabBar={() => <ScrollableTabBar style={{ borderColor: '#ddd'}}/>}
          >
          
          {/** 动态 **/}
          <View tabLabel='动态' style={styles.tab_container}>
          { type !== '老师A' &&
            <TouchableOpacity style={[styles.block, {backgroundColor: '#24292e', padding: 15}]} 
              onPress={()=>navigate('Edit_Progress', { 'title': '填写进度', 'data': this.state.data, 'index': this.state.index, 'type': this.state.type})}>
              
              <Text style={{color: '#fff', fontWeight: '600', fontSize: 17, textAlign: 'center'}}>添加进度描述</Text>
            </TouchableOpacity>
          }
            <Dynamic data={ progress }/>
          </View>

          {/** 详情 **/}
          <View tabLabel='详情' style={styles.tab_container}>
            <View style={[styles.block, {backgroundColor: data.status_color, marginBottom: 0}]}>
              <Text style={{color: '#fff', fontWeight: '600', fontSize: 16}}>{'    ' +  data.status}</Text>
            </View>
            <View style={[styles.block, {borderColor: data.status_color, borderWidth: 1}]}>
              <Text style={styles.remark}>{data.remark? `  ${data.remark}`: '暂无具体描述'}</Text>
            </View>
            <View style={[styles.block, {borderColor: data.status_color, borderWidth: 1}]}>
              <View style={styles.item}>
                <Icon name="layers" size={20} style={{margin: 10}} color={data.status_color}/>
                <Text style={styles.remark}>面向学院：{ data.academy}</Text>
              </View>
              <Divider style={{margin: 8}}/>
              <View style={styles.item}>
                <Icon name="user" size={20} style={{margin: 10}} color={data.status_color}/>
                <Text style={styles.remark}>项目负责人：{ data.contact}</Text>
              </View>
              <Divider style={{margin: 8}}/>
              <View style={styles.item}>
                <Icon name="clock" size={20} style={{margin: 10}} color={data.status_color}/>
                <Text style={styles.remark}>开始时间：{ data.date_begin}</Text>
              </View>
              <View style={styles.item}>
                <Icon name="calendar" size={20} style={{margin: 10}} color={data.status_color}/>
                <Text style={styles.remark}>截止时间：{ data.date_over || '至今'}</Text>
              </View>
            </View>
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  banner: {
    marginHorizontal: 30,
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#fff',
  },
  box_head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginVertical: 10
  },
  tab_container: {
    flex: 1,
    margin: 15,
    padding: 10,
  },
  block: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remark: {
    lineHeight: 24,
    margin: 10,
    color: '#444'
  },
  edit_button: {
    height: 44,
    paddingRight:15,
    color: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})