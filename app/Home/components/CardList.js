import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
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
    }]
  }
  render(){
    const { navigate } = this.props.navigation;
    return(
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.index}
          numColumns={3}
          showsVerticalScrollIndicator={false}//  水平进度条
          renderItem={({item}) => 
            <CardItem
              img_url={item.img_url}
              title = {item.title}
              onPress={()=>{navigate('Edu')}}
            />
          }
        />
    )
  }
}

const CardItem = (props) => (
  <TouchableOpacity onPress={props.onPress}>
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
);

const styles = StyleSheet.create({
  card: {
    height: 110,
    width: _width*0.3,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  banner: {
    height: 70,
    resizeMode: 'contain',
  },
  title: {
    color: '#666',
    textAlign: 'center',
    fontSize: 12
  }
});
export default CardList;