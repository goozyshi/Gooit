import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FAB } from 'react-native-paper';

import LoginHint from './components/LoginHint';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import ChooseList from './components/ChooseList';
import TaskDetail from './components/TaskDetail';
import { _height, _width } from '../common/config';

class Publish extends Component{
  render(){
    const { navigate } = this.props.navigation;
    return (
          <FAB
            style={styles.fab}
            large
            icon="add"
            onPress={()=>navigate('CreateTask', {'title': '新建项目'})}
          />
    )
  }
}


class TaskScreen extends Component {
  static navigationOptions = {
    title: '任务',
    headerStyle: {
      backgroundColor: '#24292e',
    },
    
  };
  state = {
    type: 'B'
  };
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>{ this.state.type === 'A' ? '已发布的任务':'任务列表' }</Text>
        <TaskList navigation={this.props.navigation} />
        { this.state.type === 'A' && <Publish navigation={this.props.navigation}/> }
      </View> 
    )
  }
}
const TaskRootStack = createStackNavigator(
  {
    Task: TaskScreen,
    CreateTask: CreateTask,
    TaskDetail: TaskDetail,
    ChooseList: ChooseList,
  },
  {
    initialRouteName: 'Task',
    headerMode: 'screen',
    mode: 'card',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#24292e',
      },
      title: '初始标题',
      /**
      *设置一个空View让标题居中
      **/
      headerLeft: <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>,
      headerRight: <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>,
      headerTitleStyle:{
        flex:1,
        textAlign:'center',
        fontWeight: 'bold',
      },
      headerTintColor: '#fff',
    },
  }
);
const TaskContainer = createAppContainer(TaskRootStack);
export default class Task extends Component {
  render() {
    return <TaskContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    color: '#333',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10
  },
  fab: {
    backgroundColor: '#24292e',

    position: 'absolute',
    right: 40,
    bottom: 40,
  },
  publish_buttton: {
    width: 50,
    height: 50,
    padding: 5,
    borderRadius: 40,

    position: 'absolute',
    right: 40,
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#24292e',
  }
});