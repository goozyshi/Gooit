import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { _height, _width } from '../../common/config';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import CheckBox from 'react-native-check-box';
/**
 * 列表数据
 */
const exdata = [{
  extitle: '为什么是 C ——因为你无可替代',
  exsub: '1.如何学习C语言 2.第一个`helloshiyanlou`程序'
},{
  extitle: '开发环境和剖析第一个 C 语言',
  exsub: '1.C程序创建及其运行'
},{
  extitle: '挑战：输出I love shiyanlou!',
  exsub: ''
},{
  extitle: '顺序程序设计 - 数据类型（一）',
  exsub: '1.数据类型 2.运算符与表达式 3.C语句 4.数据的输入与输出'
},{
  extitle: '顺序程序设计 - 数据类型（二）',
  exsub: '1.字符型数据 2.浮点型数据'
},{
  extitle: '顺序程序设计 - 运算符和数据转换',
  exsub: '1.基本的算数运算符 2.自增、自减运算符 3.不同数据类型之间的混合运算 4.强制类型转换 5.数据的输入和输出'
},{
  extitle: '挑战：摄氏转华氏温度',
  exsub: ''
},{
  extitle: '选择程序设计',
  exsub: ' 1.条件判断案例 2.用`if`语句实现选择结构 3.关系运算符和关系表达式 4.逻辑运算符和逻辑表达式 5.条件运算符和条件表达式 6.用`switch`语句实现多分支选择结构'
},{
  extitle: '循环程序设计',
  exsub: '1.用`while`语句实现循环 2.用`dowhile`语句实现循环 3.用`for`语句实现循环 4.改变循环的执行状态 5.循环的嵌套'
},{
  extitle: '挑战：序列求和',
  exsub: ''
},{
  extitle: 'C 语言数组',
  exsub: '1.一维数组 2.二维数组 3.字符串数组'
},{
  extitle: '模块化程序设计',
  exsub: '1.函数的定义 2.函数的嵌套调用 3.递归函数 4.数组与函数'
},{
  extitle: '指针（一）',
  exsub: '1.指针是什么 2.指针变量 3.通过指针引用数组 4.通过指针引用字符串'
},{
  extitle: '指针（二）',
  exsub: '1.指针引用字符串'
},{
  extitle: '挑战：修复指针使用错误的 BUG',
  exsub: ''
},{
  extitle: '文件和文件的输入与输出',
  exsub: '1.文件 2.打开和关闭文件 3.文件的输入与输出'
}
]
class Edu extends Component {
  state = {
    isChecked: false
  }
  changeState = () =>{
    this.setState({
      isChecked: !this.state.isChecked
    },()=>{
      console.log(this.state)
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box_banner}>
          <Image source={{uri:'https://dn-simplecloud.shiyanlou.com/1523348726316.png'}}
          style={styles.banner}
          />
        </View>
        <ScrollableTabView
          style={styles.scrolltab}
          initialPage={0}
          tabBarActiveTextColor={'#24936E'}// 标签选择颜色
          tabBarInactiveTextColor={'#666'} // 标签未选中颜色
          tabBarUnderlineStyle={{backgroundColor:'#24936E', height:2}}// 下划线样式
          renderTabBar={() => <ScrollableTabBar />}
          >
          <Profile tabLabel='信息简介'/>
          <ExperimentList
            tabLabel='课程列表'
            isChecked={this.state.isChecked}
            onPress={()=>this.changeState()}
          />
        </ScrollableTabView>
        <ToggleFooter/>
      </View>
    );
  }
}

/**
 * 课程简介
 */
class Profile extends Component {
  render(){
    return (
      <View style={styles.box_content}>
        <Text style={styles.text}>
          &nbsp;&nbsp;&nbsp;&nbsp;本课程讲解 C 语言的开发环境以及对 C 语言的剖析，引入大量的 C 语言程序案例，把算法和语法结合起来，
          通过引导大家由浅入深地编写 C 程序，让大家掌握 C 语言。我们将从中学会 C 语言语法、数组、模块化程序设计指针、文件的输入与输出等。
        </Text>
      </View>
    )
  }
}

/**
 * 课程列表
 */
class ExperimentList extends Component {
  onPress(){
    this.props.onPress()
    console.log(`sdasd`)
  }
  render(){
    return(
      <View style={styles.box_content}>
        <FlatList
          data={ exdata }
          keyExtractor={item => item.extitle}
          showsVerticalScrollIndicator={false}//  水平进度条
          renderItem={({item, index}) => 
            <TouchableOpacity style={styles.excontainer} onPress={()=>{this.onPress()}}>
              <View style={styles.check}>
                  <CheckBox
                    isChecked={this.props.isChecked}
                    checkedCheckBoxColor={'#24936E'}// 勾选颜色
                    uncheckedCheckBoxColor={'#eee'}// 未勾选颜色
                    onClick={()=>{this.onPress()}}
                  />
                <Text style={styles.extitle}>{index+1}.{item.extitle}</Text>
              </View>
              { (item.exsub!='') && (
                <View style={styles.tagbox}>
                  <Text style={styles.extag}>知识点</Text><Text style={styles.exsub} numberOfLines={1} ellipsizeMode='tail'>{item.exsub}</Text>
                </View>
              )}
            </TouchableOpacity>
          }
        />
      </View>
    )
  }
}

/**
 * 底部工具栏
 */
class ToggleFooter extends Component {
  render() {
    return (
      <View style={styles.togglebox}>
      <View style={styles.icon}>
        <Icon 
          name={'favorite-border'}
          size={28}
          color={'#24936E'}
        />
      </View>
      <View style={styles.text_toggle}>
        <Text style={{color: '#fff'}}>开始学习</Text>
      </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box_banner: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  banner: {
    height: _height*0.22,
    width: _width*0.7,
    borderRadius: _height*0.01
  },
  scrolltab: {
    flex: 0.7,
  },
  box_content: {
    flex:1,
    justifyContent: 'space-between',
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    fontSize: 14,
    color: '#666',
  },
  togglebox: {
    width: _width,
    flexDirection: 'row',
    backgroundColor: '#f5f5f5'
  },
  icon: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_toggle: {
    flex: 0.8,
    backgroundColor: '#24936E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  excontainer: {
    margin: 5
  },
  check: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  extitle: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '500',
    color: '#333'
  },
  tagbox: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: _width*0.8,
  },
  extag: {
    borderWidth: 1,
    borderColor: '#24936E',
    fontSize: 10,
    padding: 2,
    textAlign: 'center',
    marginRight: 3,
    flexWrap: 'wrap'// 折行配合TextInput的numberOfLines={1} ellipsizeMode='tail'以省略号结束
  },
  exsub: {
    fontSize: 11,
  }
})
export default Edu;
