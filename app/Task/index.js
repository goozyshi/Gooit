import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  DeviceEventEmitter
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { FAB } from 'react-native-paper';

import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import ChooseList from './components/ChooseList';
import TaskDetail from './components/TaskDetail';
import Edit_Progress from './components/Edit_Progress';
import { _height, _width } from '../common/config';
import LoginHint from './components/LoginHint';


class TaskScreen extends Component {
  static navigationOptions = {
    title: '任务',
    headerStyle: {
      backgroundColor: '#24292e',
    },
  };
  state = {
    type: '',
    loadding: true,
  };
  ChangeType = async () => {
    try {
      let type = await AsyncStorage.getItem ('logged_user');
      if (type !== null) {
        this.setState({type, loadding: false})
      }else {
        this.setState({type: '', loadding: false})
      }
      this.setState({
        loadding: true
      })
     } catch (error) {
      throw Error
     }
  }
  componentDidMount = () => {
    this.ChangeType()
    this.INDEX = DeviceEventEmitter.addListener('LOGGED', this.ChangeType.bind(this))
    this.LOGOUT = DeviceEventEmitter.addListener('LOGOUT', this.ChangeType.bind(this))
  };
  componentWillUnmount() {
    this.INDEX.remove();
    this.LOGOUT.remove();
  };
  render(){
    return(
      this.state.type === '' ? <LoginHint/>
        :
        <View style={styles.container}>
          <Text style={styles.title}>{ this.state.type === '老师A' ? '已发布的任务':'任务列表' }</Text>
          { this.state.loadding && <TaskList navigation={this.props.navigation} type={this.state.type}/> }
          { this.state.type === '老师A' && 
              <FAB
                style={styles.fab}
                large
                icon="add"
                onPress={()=>this.props.navigation.navigate('CreateTask', {'title': '新建项目'})}
              />
          }
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
    Edit_Progress: Edit_Progress,
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