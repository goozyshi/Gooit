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
      img_url: 'https://dn-simplecloud.shiyanlou.com/1523348726316.png',
      title: 'C语言入门教程',
      desc: '适合学过 Linux 基础入门课程后的用户练习各种 Linux 命令。'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/ncn20.jpg',
      title: '数据结构(新版)',
      desc: '适合学过 Linux 基础入门课程后的用户练习各种 Linux 命令。'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/1506663669396.png',
      title: 'Matlab入门',
      desc: '适合学过 Linux 基础入门课程后的用户练习各种 Linux 命令。'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/1523348726316.png',
      title: 'C语言入门教程1',
      desc: '适合学过 Linux 基础入门课程后的用户练习各种 Linux 命令。'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/ncn20.jpg',
      title: '数据结构(新版)1',
      desc: '适合学过 Linux 基础入门课程后的用户练习各种 Linux 命令。'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/1506663669396.png',
      title: 'Matlab入门1',
      desc: '适合学过 Linux 基础入门课程后的用户练习各种 Linux 命令。'
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