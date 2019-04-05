import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  AsyncStorage,
  FlatList,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { _height, _width } from '../../common/config';
import BackButton from '../../common/BackButton';
class SearchDataSheet extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    val: '',
    isShow: false,
    stopLoading: true,
    history: [],  //历史记录
    result: [],
    sub_val: ''//提交的搜索字段
  }
 
  /**
   * 提交
   */
  _onSubmitEditing = async () => {
    // 保存历史记录
    const { val, history } = this.state;
    let reg=/^(?!(\s+$))/    //  模式匹配。输入内容不为纯空格
    if ( val && reg.test(val) ){
      history.map((item, index)=>{
        if( val === item){
          history.splice(index, 1)
        }
      });
      history.unshift(val);// 新纪录放在最开始
      let saving_data = history.join('-');
      let rawData = await this.fetchData(val);
      if(rawData){
        let result = JSON.parse(rawData);
        this.setState({stopLoading: false})
        this.timer = setTimeout(() => {
          this.setState({
            history: history,
            isShow: true,
            result: result,
            stopLoading: true,
            sub_val: this.state.val
          },()=>{
            // 保存缓存
            AsyncStorage.setItem('history', saving_data)
          });
        }, 500);
      }else {
        ToastAndroid.show("找不到你说气不气", ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show("搜索内容不能为空", ToastAndroid.SHORT);
    }
  }

  // 发起请求
  fetchData(id) {
    // return fetch('http://192.168.0.93:3000/search') // bgy
    // return fetch(`http://172.29.4.240:3000/search/${id}`) // szu
    return fetch(`http://129.204.128.185:3000/search/${id}`) // ssr
      .then(response => response.text())
      .then((responseText) => {
        const rawData = responseText;
        return rawData;// 返回字符串便于缓存
      })
      .catch((error) => {
        console.error(error);
      });
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
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  
  handleChange = (item) =>{
    this.setState({
      val: item
    },()=>{
      this._onSubmitEditing()
    })
  }
  render(){
    const { val, history, isShow, result, stopLoading, sub_val} = this.state;
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <View style={styles.SearchBar}>
          <BackButton pop={ this.props.navigation.pop } name = {'chevron-left'}/>
          <View style={styles.InputCell}>
            <View style={styles.inputWrapper}>
              <View style={styles.searchIcon}><Icon name="search" color="#777" size={32} /></View>
              <TextInput
                style={styles.input}
                placeholder={'请输入元器件型号'}
                value={val}
                autoFocus={true}
                onChangeText={val => this.setState({val: val})}
              />
              { (val.length !== 0) && <View style={styles.cancelBtn}><Icon name="close" size={32} color="#494949" onPress={() => this.setState({val: ''})}/></View>}
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
        { stopLoading ?
          isShow?
          <View style={{justifyContent: 'center', width: _width}}>
            <View style={styles.historyheader}>
              <Text style={styles.headline}>找到的<Text style={{color: '#24936E'}}>&nbsp;{sub_val}&nbsp;</Text>元器件：</Text>
            </View>
            <FlatList
              data={result}
              keyExtractor={item => item.id}// 使用数据自带id作为item的id
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => 
                <ResultItem
                  name = {item.name}
                  company = {item.company}
                  desc = {item.desc}
                  data = {item.data}
                  onPress = {()=>navigate('Chip', {
                    name: item.name,
                    data: item,
                    type: val
                  })}
                />
              }
            />
          </View>
          :
          <View>
            <View style={styles.historyheader}>
              <Text style={styles.headline}>历史记录</Text>
              <TouchableOpacity onPress={()=>this.setState({history: []},()=>{AsyncStorage.removeItem('history')})}>
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
            <Text style={[styles.headline,{marginLeft: 15, color: 'red', textDecorationLine: 'underline'}]}>什么是Datasheet?</Text>
          </View>
          :
          <ActivityIndicator style={styles.stopLoading} size="large" color="#24936E" />
        }
      </View>
    )
  }
}
const ResultItem = (props) => {
  const { name, company, desc, pdf, data, onPress} = props;
  return(
      <TouchableOpacity onPress={ onPress } >
      <View style={styles.result_container}>
        <Text style={styles.result_name}>{name}</Text>
        <View style={{justifyContent: 'center'}}>
          {desc.ch? <Text style={styles.desc}>{desc.ch}</Text> : null}
          <Text style={styles.desc}>{desc.en}</Text>
        </View>
        <Text style={styles.result_corp}>{company}</Text>
      </View>
      </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    // marginTop: 20,// 沉浸
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  SearchBar: {
    width: _width,
    backgroundColor: '#24292e',
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
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: _width * 0.65,
    padding: 0,
    backgroundColor: '#f5f5f5',
  },
  searchIcon: {
    width: _height/20,
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
    backgroundColor: '#ddd',
    borderRadius: 50,
    padding: 2
  },
  historyheader: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headline: {
    fontSize: 18,
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
  },
  result_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
    padding: 20
  },
  result_name: {
    fontSize: 21,
    color: '#333',
    marginRight: 10,
    fontWeight: '500'
  },
  desc: {
    fontSize: 14,
    marginRight: 10
  },
  result_corp: {
    marginTop: 20,
    textAlign: 'center',
    borderRadius: 4,
    padding: 5,
    fontSize: 10,
    color: '#fff',
    backgroundColor: '#24936E',
    fontWeight: '500',
  },
  stopLoading: {
    marginTop: 400
  }

})
export default SearchDataSheet;