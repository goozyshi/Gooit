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
      img_url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=725421707,3293209347&fm=26&gp=0.jpg',
      title: 'Linux 入门基础教程'
    },{
      img_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554890546333&di=6615c5aa8ac74c83d8ef49dcb623f75c&imgtype=0&src=http%3A%2F%2Ffile.elecfans.com%2Fweb1%2FM00%2F84%2FDB%2Fo4YBAFxmGveANXy-AAIY6C_D0Ys669.png',
      title: 'Matlab入门'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/1499681177825.png',
      title: 'Github 快速上手教程 '
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/ncn195.jpg',
      title: 'Linux 内核分析'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/ncn68.jpg',
      title: 'Linux 命令实例练习'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/course/1542591658684_%E3%80%902%E3%80%91-%E3%80%90Vim%E7%BC%96%E8%BE%91%E5%99%A8%E3%80%91.png',
      title: 'Vim 编辑器'
    },{
      img_url: 'https://dn-simplecloud.shiyanlou.com/ncn90.jpg',
      title: '正则表达式基础'
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
    height: _width*0.27,
    width: _width*0.27,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
    marginBottom: 10,
  },
  banner: {
    height: _width*0.25,
    width: _width*0.25,
  },
  title: {
    marginTop: 10,
    color: '#444',
    fontSize: 12
  }
});
export default OSList;