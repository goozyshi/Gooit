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
      title: '苹果明年将完全放弃LCD显示屏',
      url: 'http://www.elecfans.com/xianshi/jishu/20190123856916.html'
    },{
      img: 'http://file.elecfans.com/web1/M00/82/FB/o4YBAFxILuiAS2kvAAHu0Ru_qf0285.jpg',
      title: '华为领先完成5G技术第三阶段测试',
      url: 'http://www.elecfans.com/tongxin/rf/20190123857279.html'
    },{
      img: 'http://file.elecfans.com/web1/M00/83/78/pIYBAFxIK96APIeWAAFUlBQoHes111.png',
      title: '苹果拒绝与高通和解',
      url: 'http://www.elecfans.com/d/857255.html'
    },{
      img: 'http://file.elecfans.com/web1/M00/82/FA/o4YBAFxIKcWAXRNiAAECOIPxJL8916.png',
      title: '松下ALPHA阿尔法洗衣机卓越洗涤性能 ',
      url: 'http://www.elecfans.com/video/20190123857244.html'
    }],
    headindex: 1,
  }
  render(){
    const { navigate } = this.props.navigation
    return (
      <View style={styles.wrapper}>
        <View style={styles.head}>
          <Text style={styles.headline}>行业资讯</Text>
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
                onPress={()=>{navigate('Details',{
                  url: item.url
                })}
                }
              >
                <Image source={{uri: item.img}} style={styles.banner}/>
                <Text style={styles.banner_title}>{item.title}</Text>
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
    height: _height*0.22,
    marginTop: 5,
    borderRadius:8
  },
  banner_title: {
    color: '#fff',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: - _height*0.125,
  },
  dotStyle: {
    width: 25,
    height: 5,
    backgroundColor: '#fff',
    opacity: 0.4,
  },
  activeDotStyle: {
    width: 25,
    height: 5,
    backgroundColor: '#fff',
  },
})