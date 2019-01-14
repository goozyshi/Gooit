import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { _height, _width } from '../../common/config';
class SearchDataSheet extends Component {
  state = {
    val: '',
    isShow: false,
    history: [],  //历史记录
  }
 
  /**
   * 提交
   */
  _onSubmitEditing = async () => {
    const { val, history } = this.state;
    let reg=/^(?!(\s+$))/    //  模式匹配。输入内容不为纯空格
    if ( val && reg.test(val) ) {
      // 不重复添加记录
      history.map((item, index)=>{
        if( val === item){
          history.splice(index, 1)
        }
      })
      // 新纪录放在最开始
      history.unshift(val);
      
      let saving_data = history.join('-')
      this.setState({
        history: history,
        isShow: true
      },()=>{
        // 保存缓存
        AsyncStorage.setItem('history', saving_data)
      });
    } else {
      ToastAndroid.show("搜索内容不能为空", ToastAndroid.SHORT);
    }
  }

  async componentDidMount() {
    // 读取缓存
    let rawdata = await AsyncStorage.getItem('history');
    if(rawdata != null){
      let temp = rawdata.split('-')
      this.setState({
        history: temp
      })
    }
  }
  clearHistory = () =>{
    this.setState({history: []},()=>{
      AsyncStorage.removeItem('history')
    })
  }
  handleChange = (item) =>{
    console.log(item)
    this.setState({
      val: item
    },()=>{
      this._onSubmitEditing()
    })
  }
  render(){
    const { val, history, isShow } = this.state;
    return(
      <View style={styles.container}>
        <View style={styles.SearchBar}>
          <View style={styles.InputCell}>
            <View style={styles.inputWrapper}>
              <View style={styles.searchIcon}><Icon name="search" color="#777" size={30} /></View>
              <TextInput
                style={styles.input}
                placeholder={'做毕设好麻烦啊……'}
                value={val}
                autoFocus={true}
                onChangeText={val => this.setState({val: val})}
              />
              { (val.length !== 0) && <View style={styles.cancelBtn}><Icon name="close" size={25} color="#494949" onPress={() => this.setState({val: ''})}/></View>}
            </View>
          </View>
          <View style={styles.searchBtn}>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => this._onSubmitEditing()}
            >
              <Text style={{color: '#fff'}}>搜索</Text>
            </TouchableOpacity>
          </View>
        </View>
        { isShow ?
          <View style={styles.historyheader}>
            <Text style={styles.headline}>搜索结果</Text>
          </View>
          :
          <View>
            <View style={styles.historyheader}>
              <Text style={styles.headline}>历史记录</Text>
              <TouchableOpacity onPress={()=>this.setState({history: []})}>
                <Text style={styles.cleartxt}>清除</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.historybox}>
              { history.map((item, index)=>
              <TouchableOpacity key={index} onPress={()=>this.handleChange(item)}>
                <Text style={styles.historytext}>{item}</Text>
              </TouchableOpacity>
              )}
            </View>
            <Text style={[styles.headline,{marginLeft: 15, color: 'red', textDecorationLine: 'underline'}]}  >什么是Datasheet?</Text>
          </View>
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    // marginTop: 20,// 沉浸
    flex: 1,
    backgroundColor: '#fff',
  },
  SearchBar: {
    width: _width,
    backgroundColor: '#24936E',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 20,// 沉浸
  },
  InputCell: {
    flex: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginRight: 0,
    backgroundColor: '#f5f5f5',
    borderRadius: _height / 13,
  },
  inputWrapper:{
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 30,
    width: _width * 0.65,
    padding: 0,
    backgroundColor: '#f5f5f5',
  },
  searchIcon: {
    width: _height / 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBtn: {
    flex: 0.1,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  cancelBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fef',
    borderRadius: 40,
  },
  historyheader: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headline: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  cleartxt: {
    color: 'red'
  },
  historybox: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 10,
    paddingLeft: 15,
  },
  historytext: {
    borderColor: '#999',
    borderWidth: 2,
    marginRight: 15,
    marginBottom: 10,
    fontSize: 13,
    textAlign: 'center',
    padding: 4,
    color: '#444'
  }
})
export default SearchDataSheet;