import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';

import { _height, _width } from '../../common/config';
import BackButton from '../../common/BackButton';

export default class TaskDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('HeaderTitle', '项目详情'),// 前面是传过来的标题，后面是备用
      /**
      *设置一个空View让标题居中
      **/
      headerLeft: <BackButton pop={ navigation.pop } name = {'chevron-left'}/>,
      headerRight: (
           <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
       ),
      headerTitleStyle:{
        flex:1,
        textAlign:'center',
      },
    };
  };
  state = {
    data: []
  };
  componentWillMount (){
    // fetch('http://129.204.128.185:3000/users')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     let temp =  [...responseJson]
    //     this.setState({
    //       published_Data: temp
    //     })
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }
  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.title}>title</Text>
        </View>
        <ScrollableTabView
          style={styles.scrolltab}
          initialPage={0}
          tabBarActiveTextColor={'#24936E'}// 标签选择颜色
          tabBarInactiveTextColor={'#666'} // 标签未选中颜色
          tabBarUnderlineStyle={{backgroundColor:'#24936E', height:2}}// 下划线样式
          renderTabBar={() => <ScrollableTabBar style={{borderWidth: 0}}/>}
          >
          <View tabLabel='动态'><Text>hshshs</Text></View>
          <View tabLabel='详情'><Text>hshshs</Text></View>
          <View tabLabel='交流'><Text>hshshs</Text></View>
          <View tabLabel='公告'><Text>hshshs</Text></View>
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
    height: _height * 0.22,
    margin: 35,
    padding: 10,
    
    backgroundColor: '#fff',
    
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
})