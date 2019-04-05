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
import { customColor } from '../../common/config';

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
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <List.Section title="个人中心">
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
          <Text style={styles.underline}>https://github.com/goozyshi/Gooit </Text>
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
    padding: 15,
    lineHeight: 32,
  },
  colorfulitem: {
    marginHorizontal: 40,
    marginVertical: 5,
    padding: 15,
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