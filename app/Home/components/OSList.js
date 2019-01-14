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
class OSList extends Component {
  state = {
    data: [{
      img_url: 'https://dn-simplecloud.shiyanlou.com/1523348726316.png',
      title: 'C语言入门教程'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/ncn20.jpg',
      title: '数据结构'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/1506663669396.png',
      title: 'Matlab入门'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/course/1542592801417_%E3%80%90596%E3%80%91-%E3%80%90Python3%E7%AE%80%E6%98%8E%E6%95%99%E7%A8%8B%E3%80%91.png',
      title: 'Python3简明教程'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/ncn18.jpg',
      title: 'Java编程语言'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/ncn1.jpg',
      title: 'Linux基础入门'
    }]
  }
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.wrapper}>
        <View style={styles.head}>
          <Text style={styles.headline}>操作系统 | 软件</Text>
        </View>
        <FlatList
          keyExtractor={item => item.title}
          data={this.state.data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}//  水平进度条
          renderItem={({item}) => 
            <OSItem
              img_url={item.img_url}
              title = {item.title}
              onPress={()=>{navigate('Edu')}}
            />
          }
        />
      </View>
    )
  }
}

const OSItem = (props) => (
  <View style={styles.cardwrapper}>
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: props.img_url }}
          style={styles.banner}
          />
          <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    marginTop: 5,
    padding: 5,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headline: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  cardwrapper: {
    marginBottom: 10
  },
  container: {
    marginRight: 5,
  },
  card: {
    height: _width*0.21,
    width: _width*0.21,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
    marginBottom: 10,
  },
  banner: {
    height: _width*0.18,
    width: _width*0.18,
  },
  title: {
    marginTop: 10,
    color: '#444',
    fontSize: 11
  }
});
export default OSList;