import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';

import { _height, _width } from '../../common/config';

export default class CareerSwiper extends Component {
  state = {
    BannerList: [{
      img: 'http://file.elecfans.com/web1/M00/82/F0/o4YBAFxH4-6AHRwKAADT8LmsT1g256.jpg',
      title: '人工智能区块链或将能改变未来的资产管理',
      url: 'http://www.elecfans.com/blockchain/856933.html'
    },{
      img: 'http://file.elecfans.com/web1/M00/83/6E/pIYBAFxH4gWAG3QBAASVKQO5ec4817.png',
      title: 'DRAM价格有望止跌回稳',
      url: 'http://www.elecfans.com/consume/856924.html'
    },{
      img: 'http://file.elecfans.com/web1/M00/83/6E/pIYBAFxH4SmAb9vOAABnadHw0Ms248.jpg',
      title: '苹果iPhone明年将会完全放弃LCD显示屏转而采用OLED显示屏',
      url: 'http://www.elecfans.com/xianshi/jishu/20190123856916.html'
    }],
    headindex: 1,
  }
  render(){
    const { navigate } = this.props.navigation
    return (
      <View style={styles.wrapper}>
        <View style={styles.head}>
          <Text style={styles.headline}>业界情报</Text>
          <View style={styles.indexbox}>
            <Text style={styles.current_index}>{this.state.headindex}</Text>
            <Text style={styles.all_index}>/{this.state.BannerList.length}</Text>
          </View>
        </View>
        <Swiper
          loop={true}
          // showsButtons={true} // 显示左右按钮
          autoplay={true}
          autoplayTimeout={3}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          onIndexChanged={(index)=>(
            this.setState({
              headindex: index+1,
            })
          )}
        >
          { this.state.BannerList.map((item)=>
              <TouchableOpacity 
                key={item.title}
                style={styles.slide}
                onPress={()=>{navigate('Details')}
                }
              >
                <Image source={{uri: item.img}} style={styles.banner}/>
              </TouchableOpacity>
            )
          }
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: _height*0.28,
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
  indexbox: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  current_index: {
    color: '#F75C2F',
    fontSize: 18
  },
  all_index: {
    fontSize: 14
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: _width*0.92,
    height: _height*0.2,
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dotStyle: {
    width: 40,
    height: 5,
    backgroundColor: '#fff',
    opacity: 0.4,
  },
  activeDotStyle: {
    width: 40,
    height: 5,
    backgroundColor: '#fff',
  },
})