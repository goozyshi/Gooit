import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  Text,
  Image
} from 'react-native';
import { _height, _width } from '../../common/config';
import { Divider } from 'react-native-paper';
class AlgoList extends Component {
  state = {
    data: [{
      img_url: 'https://dn-simplecloud.shiyanlou.com/1453520874372.png',
      title: '经典算法解题实战',
      desc: '解决 LeetCode 等题目，积累算法解题的实战经验。'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/1517282649100.png',
      title: 'K-近邻算法实现手写数字识别系统',
      desc: '详细讲述 k-近邻算法的原理,使用该算法实现手写数字识别系统'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/1546500900109.png',
      title: 'C++ 解决迷宫问题',
      desc: ' C++ 实现了一个迷宫游戏，涉及到广度优先遍历算法。'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/1517298658415.png',
      title: 'C语言实现大数计算器（加减乘除）',
      desc: '通过C语言实现一个简易计算器，用于解决任意长度的有符号整数的加、减、乘、除运算。'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/ncn20.jpg',
      title: '数据结构(新版)',
      desc: '数据结构是计算机类专业的一门核心学科，本课程使用 C 语言介绍，需要一定的 C 语言基础。'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/1517282605623.png',
      title: 'Python实现遗传算法求解n-queens问题',
      desc: '对遗传算法进行简单讲解，通过使用python实现简单的遗传算法求解函数极值以及通过实例了解Pyevolve的使用方法'
    }]
  }
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.wrapper}>
        <View style={styles.head}>
          <Text style={styles.headline}>算法精选</Text>
        </View>
        <FlatList
          keyExtractor={item => item.title}
          data={this.state.data}
          showsVerticalScrollIndicator={false}//  隐藏垂直进度条
          renderItem={({item, index}) => 
            <AlItem
              length = {this.state.data.length}
              index = {index}
              img_url={item.img_url}
              title = {item.title}
              desc = {item.desc}
              onPress={()=>{navigate('Edu')}}
            />
          }
        />
      </View>
    )
  }
}

const AlItem = (props) => (
  <View style={styles.cardwrapper}>
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.card}>
        <Image
          source={{ uri: props.img_url }}
          style={styles.banner}
          />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.desc}>{props.desc}</Text>
      </View>
    </TouchableOpacity>
    { (props.index != props.length -1) && <Divider style={styles.div}/> }
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 5,
    backgroundColor: '#fff',
  },
  head: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 5,
    padding: 10,
  },
  headline: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  card: {
    height: _height*0.33,
    width: _width,
    marginLeft: 15,
  },
  banner: {
    height: _height*0.27,
    width: _width*0.95,
  },
  title: {
    marginTop: 6,
    color: '#333',
    fontSize: 16,
  },
  desc: {
    marginTop: 3,
    color: '#999',
    fontSize: 14,
  },
  div: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  }
});
export default AlgoList;