import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Feather';

import { _height, _width } from '../../common/config';
import BackButton from '../../common/BackButton';
import { TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

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
    data: [],
    type: 'A',
    announce: ''
  };
  componentWillMount (){
    const temp_data = this.props.navigation.state.params.data;
    this.setState({
      data: temp_data
    })
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
    console.log('this.props', this.props)
    return (
      <View style={styles.container}>
        <Card style={styles.banner}>
          <View style={styles.box_head}>
            <Text style={styles.title}>{this.state.data.title}</Text>
            <Icon name="edit" size={20} color={'#444'} style={{marginRight: 8}}/>
          </View>
          <View>
            <TextInput
              mode='outlined'
              multiline={true}
              label={'项目公告'}
              numberOfLines = {3}
              disabled={this.state.type !== 'A'}
              value={this.state.data.announce || this.state.announce}
              placeholder='尚未填写公告'
              style = {{padding: 5, color: '#333'}}
              onChangeText={announce => this.setState({ announce })}
            />
         </View>
        </Card>
        <ScrollableTabView
          initialPage={0}
          tabBarActiveTextColor={'#24936E'}// 标签选择颜色
          tabBarInactiveTextColor={'#666'} // 标签未选中颜色
          tabBarUnderlineStyle={{backgroundColor:'#24936E', height:3}}// 下划线样式
          renderTabBar={() => <ScrollableTabBar style={{ borderColor: '#ddd'}}/>}
          >
          <View tabLabel='动态' style={styles.tab_container}><Text>hshshs</Text></View>
          <View tabLabel='详情' style={styles.tab_container}>

          </View>
          <View tabLabel='交流' style={styles.tab_container}><Text>hshshs</Text></View>
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
    margin: 20,
    padding: 10,
    // backgroundColor: '#fff'
  }
})