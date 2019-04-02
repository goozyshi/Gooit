import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { _height, _width } from '../../common/config';
import BackButton from '../../common/BackButton';

import Icon from 'react-native-vector-icons/FontAwesome';

const achedemic = ['数学与统计学院', '物理与能源学院', '化学与环境工程学院', '材料学院', '信息工程学院', '计算机与软件学院', '建筑与城市规划学院', '土木工程学院', '电子科学与技术学院', '机电与控制工程学院', '生命与海洋科学学院', '光电工程学院', '高尔夫学院', '医学部', '国际交流学院', '心理与社会学院', '南特商学院', '高等研究院', '创业学院', '继续教育学院', '研究生院', '体育部', '师范学院(部)', '人文学院', '外国语学院', '传播学院', '经济学院', '管理学院', '法学院', '艺术设计学院', ];
const status = [{name: '未开始', color: '#61BCF5'}, {name: '进行中', color: '#FC9F4D'}, {name: '已完成', color: '#53c68c'}]
const contact = ['学生A', '学生B']
export default class ChooseList extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
        title: params ? params.title : '初始标题',
        /**
        *设置一个空View让标题居中
        **/
        headerLeft: <BackButton pop={ navigation.pop } name = {'x'}/>,
        headerRight: <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>,
        headerTitleStyle:{
            flex:1,
            textAlign:'center',
        },
    };
  };

  updateState = (item, color) => {
    const { pop } = this.props.navigation;
    if (this.props.navigation.state.params.callback) {
        this.props.navigation.state.params.callback(item, color);
        pop();
    }
  }
  render() {
    const { title } = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.container}>

      { title === '选择学院' && achedemic.map((item)=>{
        return (
          <TouchableOpacity style={styles.task_container} key={item} onPress={()=>this.updateState(item)}>
            <Text style={styles.title}>{item}</Text>
          </TouchableOpacity>
        )
      })}
      
      {title === '选择负责人' && contact.map((item)=>{
        return (
          <TouchableOpacity style={styles.task_container} key={item} onPress={()=>this.updateState(item)}>
            <Text style={styles.title}>{item}</Text>
          </TouchableOpacity>
        )
      })}

      { title === '更改状态' && status.map((item)=>{
        return (
          <TouchableOpacity style={styles.task_container} key={item.name} onPress={()=>this.updateState(item.name, item.color)}>
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        )
      })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  task_container: {
    marginTop: 10,
    padding: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    color: '#333',
    letterSpacing : 2,
  },  
  footer: {
    flex: 0.2,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  }
})