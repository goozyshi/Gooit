import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  DeviceEventEmitter
} from 'react-native';
import { List, Divider } from 'react-native-paper';
const customColor = [{
  color: '#F4A7B9',
  name: '一斥染',
  remark: 'IKKONZOME'
},{
  color: '#4E4F97',
  name: '红褂花',
  remark: 'BENIKAKEHANA'
},{
  color: '#E2943B',
  name: '朽叶',
  remark: 'KUCHIBA'
},{
  color: '#91AD70',
  name: '柳染',
  remark: 'YANAGIZOME'
},{
  color: '#66BAB7',
  name: '水浅葱',
  remark: 'MIZUASAGI'
},{
  color: '#005CAF',
  name: '瑠璃',
  remark: 'RURI'
}]
class FeatureList extends Component {
  state = {
    expanded: false,
  }

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded,
  });
  
  render() {
    return (
      <ScrollView>

      <View style={styles.container}>
        <List.Section title="个人中心">
          <List.Accordion title="我的收藏" left={props => <List.Icon {...props} icon="favorite" />} >
            { this.state.favor_arr && this.state.favor_arr.map((item)=><List.Item key={item} title={item} />)}
          </List.Accordion>
          <Divider />
          <List.Accordion title="多彩主题" left={props => <List.Icon {...props} icon="insert-emoticon" />}>
          {customColor.map((item)=>
            <TouchableOpacity key ={item.remark} onPress={ ()=>{ this.setState({expanded:!this.state.expanded},()=>{DeviceEventEmitter.emit('colorMaker',item.color)})} }>
              <View style={[styles.colorfulitem, {backgroundColor: item.color} ]}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.remark}>{item.remark}</Text></View>
            </TouchableOpacity>
          )}
          </List.Accordion>
        </List.Section>

        <View style={{height: 15, backgroundColor: '#f5f5f5'}}/>

        <List.Section title="更多">
          <List.Accordion
            title="意见反馈"
            left={props => <List.Icon {...props} icon="thumbs-up-down" />}
          >
          <Text style={styles.underline} textDecorationLine='underline' color={'#072'}>说出你的梦想&nbsp;&nbsp; <Text style={{color:'#072', textDecorationLine: 'underline'}}>https://github.com/goozyshi/Gooit </Text></Text>
          </List.Accordion>
          <Divider />
          <List.Accordion  title="关于Gooit" left={ props =>  <List.Icon {...props} icon="info" />} >
          <Text style={styles.comment}>Gooit致力于为深圳大学提供学习平台以及实验室项目管理服务，现有的功能包括了元器件手册查询，行业资讯，便捷实验室用计算器以及与老师端对接的任务项目管理追踪。虽然现在的她还不完善，但在版本的迭代下它会变成一款优秀的App。欢迎大家Fork</Text>
          </List.Accordion>
        </List.Section>
        
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  underline: {
    fontSize: 16,
    margin: 10,
    color:'#444',
    marginLeft: -40,
    padding: 3,
    lineHeight: 24,
  },
  comment: {
    fontSize: 16,
    margin: 10,
    color:'#444',
    marginLeft: -40,
    padding: 3,
    lineHeight: 24,
  },
  colorfulitem: {
    marginHorizontal: 40,
    marginVertical: 2,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: '#fff'
  },
  remark: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 18,
    color: '#f5f5f5',
  }
});
export default FeatureList;