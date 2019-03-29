import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';

import { _height, _width, user } from '../../common/config';
class User extends Component {
  state = {
    isLogin: false,
    wait: false,
    index: 0,
    selectedUser:'',
    selectedDepartment: '',
    type: '',
    img: '',
    temp: []
  }
  _showDialog = () => this.setState({ visible: true});

  _hideDialog = () => this.setState({visible: false});
  
  _confirmExit = () =>{
    this.setState({
      visible: false,
      wait: true
    });
    this.timer = setTimeout(() => {
      this.setState({
        visible: false,
        isLogin: false,
        wait: false,
      },()=>{
        AsyncStorage.removeItem('logged_user');
        AsyncStorage.removeItem('logged_department');
        AsyncStorage.removeItem('logged_type');
        AsyncStorage.removeItem('logged_img');
        AsyncStorage.removeItem('logged');
        AsyncStorage.removeItem('favor');
      })
    }, 500);
  }

  /**
   * 显示用户列表
   */
  _showUser(){
    return(
      !this.state.wait?
      user.map((item, index)=>
      <TouchableOpacity key={index} onPress={()=>this._chooseUser(index)}>
        <Text style={styles.login_user}>{item.name}</Text>
      </TouchableOpacity>
      )
      :
      <ActivityIndicator  size="large" color="#072" />
    )
  }

  /**
   * 选择用户
   */
  _chooseUser = (index) => {
    this.setState({
      visible: false, 
      wait: true
    });
    this.timer = setTimeout(() => {
      this.setState({
        isLogin: true,
        wait: false,
        selectedDepartment: user[index].department,
        selectedUser: user[index].name,
        type: user[index].type,
        img: user[index].img
      },()=>{
        // 缓存登录者
        AsyncStorage.setItem('logged', this.state.isLogin)
        AsyncStorage.setItem('logged_user', this.state.selectedUser)
        AsyncStorage.setItem('logged_department', this.state.selectedDepartment)
        AsyncStorage.setItem('logged_type', this.state.type)
        AsyncStorage.setItem('logged_img', this.state.img)
      })
    }, 500);
  }

  async componentDidMount() {
    let rawuser = await AsyncStorage.getItem('logged_user');
    let rawdepartment = await AsyncStorage.getItem('logged_department');
    let rawtype = await AsyncStorage.getItem('logged_type');
    let rawimg = await AsyncStorage.getItem('logged_img');
    if(rawuser){
      this.setState({
        isLogin: true,
        selectedUser: rawuser,
        selectedDepartment: rawdepartment,
        type: rawtype,
        img: rawimg,
      })
    }
  }
  
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  
  render(){
    const { isLogin, wait, selectedUser, selectedDepartment, img} = this.state;
    return (
      <View style={styles.forebox}>
          <View style={styles.wrapper}>
            <Image source={{uri: isLogin? this.state.img :'https://static.zcool.cn/git_z/z/images/boy.png'}} style={styles.avatar}/>
            <View>
              <Text style={styles.name}>{isLogin? selectedUser : '尚未登录'}</Text>
              <Text style={styles.sub}>{isLogin? selectedDepartment : '点击右侧登陆吧'}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={this._showDialog}>
            <Text style={isLogin? styles.exit: styles.login}>{isLogin? '退出' : '登录'}</Text>
            <Portal>
              <Dialog
                visible={this.state.visible}
                onDismiss={this._hideDialog}
              >
                <Dialog.Title>{wait? '请稍后' :(isLogin? '切换用户': '选择用户')}</Dialog.Title>
                <Dialog.Content>{this._showUser()}</Dialog.Content>
                { !wait && <Dialog.Actions><Button onPress={()=>this._confirmExit()}>{isLogin? '确认退出' : '取消'}</Button></Dialog.Actions> }
              </Dialog>
            </Portal>
          </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  forebox: {
    height: _height * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginBottom: 15
  },
  wrapper:{
    alignItems: 'center',
    flexDirection: 'row'    
  },
  avatar: {
    height: 96,
    width: 96,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: 'pink',
    marginLeft: 20,
    marginRight: 15
  },
  name: {
    color: '#333',
    fontWeight: '600',
    fontSize: 24,
  },
  sub: {
    marginTop: 10,
    fontSize: 18, 
    color: '#666',
  },
  login_user: {
    color: '#555',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 20,
    marginBottom: 10,
  },
  exit: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#F75C2F',
    marginRight: 30,
  },
  login:{
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#072',
    marginRight: 30,
  }
})
export default User;