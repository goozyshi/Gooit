import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, DeviceEventEmitter, ToastAndroid} from 'react-native';
import { _height, _width } from '../../common/config';
import Icon from 'react-native-vector-icons/Feather';
import Swipeout from 'react-native-swipeout';

const delete_component = <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><View  style={{height: 72, width: 72, padding: 15, backgroundColor: '#fff', borderRadius: 100, alignItems: 'center', justifyContent: 'center'}}><Icon name="trash-2" size={32} color={'#eb2456'}/></View></View>;

export default class TaskList extends Component {
  state = {
    dataList: [],
    flag: false,
    type: 'A'
  };

  getRemoteData(){
    fetch('http://129.204.128.185:3000/project')
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
  swipeHandleDelete = () => {
    if(this.state.type !== '老师A'){
      ToastAndroid.show('你没有权限删除', ToastAndroid.SHORT);
      return false
    }
    ToastAndroid.show('删除成功', ToastAndroid.SHORT);
    let index = this.state.dataList.length -1 - this.state.rowIndex;
    fetch('http://129.204.128.185:3000/project/' + index, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(()=>this.getRemoteData())
  }

  onSwipeOpen (rowIndex) {
    this.setState({
      rowIndex: rowIndex
    })
  };
  onSwipeClose(rowIndex) {
    if (rowIndex === this.state.rowIndex) {
      this.setState({ rowIndex: null });
    }
  };

  componentDidMount= () => {
    const { type } = this.props;
    console.log(this.props)
    this.setState({
      type
    })
    { this.state.dataList && this.getRemoteData()}
    this.subscription = DeviceEventEmitter.addListener('UPDATE', this.getRemoteData.bind(this))
    this.Login = DeviceEventEmitter.addListener('LOGGED', this.getRemoteData.bind(this))
  };
  componentWillUnmount() {
    this.Login.remove();
    this.subscription.remove();
  };

  render() {
    const { navigate } = this.props.navigation;
    const length = this.state.dataList.length -1;
    const type = this.state.type;
    const swipeoutBtns = [{
      component: delete_component,
      backgroundColor: '#f5f5f5',
      onPress: ()=>(this.swipeHandleDelete())
    }];
    return (
      <View style={styles.container}>
      <FlatList
        data={this.state.dataList}
        extraData= {this.state.rowIndex}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.title}
        renderItem={({item, index}) => 
          <Swipeout backgroundColor={'#f5f5f5'} right={(swipeoutBtns)}
            onOpen={()=>(this.onSwipeOpen(index))}
            close={this.state.rowIndex !== index}
            onClose={()=>(this.onSwipeClose(index))}
            rowIndex={index}
            sectionId={0}
            autoClose={true}    
          >
          <TouchableOpacity style={[styles.task_container, {borderColor: item.status_color}]} key={item.title + item.date_begin} onPress={()=>
            (type == '老师A' || type === item.contact)? navigate('TaskDetail', {'data': item, 'id': length-index, 'type': type})
            :
            ToastAndroid.show('你不是该任务的负责人', ToastAndroid.SHORT)
          }>
            <View style={styles.header}>
              <Icon name="info" size={20} color={item.status_color} style={{marginRight: 10}}/>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.header}>
              <Icon name="user" size={20} color={item.status_color} style={{marginRight: 8}}/>
              <Text>{item.contact}</Text>
            </View>
            <View style={styles.footer}>
              <View style={styles.item}>
                <Icon name={item.status === '未开始' ? 'anchor': (item.status === '进行中' ? 'activity' : 'check')} size={20} color={item.status_color} style={{marginRight: 8}}/>
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
                <Text>{ item.date_begin } - { item.date_over || '至今'}</Text>
              </View>
            </View>
          </TouchableOpacity>
          </Swipeout>
        }
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
  }
})