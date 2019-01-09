import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  Text
} from 'react-native';
import { Card, Title } from 'react-native-paper';
import { _height, _width } from '../../common/config';
class CardList extends Component {
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
          <Text style={styles.headline}>编程基础</Text>
        </View>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.index}
          horizontal={true}
          showsHorizontalScrollIndicator={false}//  水平进度条
          renderItem={({item}) => 
            <CardItem
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

const CardItem = (props) => (
  <View style={styles.cardwrapper}>
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover 
          source={{ uri: props.img_url }}
          style={styles.banner}
          />
        <Card.Content>
          <Title style={styles.title}>{props.title}</Title>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    marginTop: 8,
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
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between',
  },
  cardwrapper: {
    marginBottom: 5
  },
  card: {
    height: _height*0.13,
    width: _width*0.29,
    marginTop: 5,
    marginBottom: 10,
  },
  banner: {
    height: _height*0.09,
    resizeMode: 'contain',
  },
  title: {
    color: '#666',
    textAlign: 'center',
    fontSize: 11
  }
});
export default CardList;