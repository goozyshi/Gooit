import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';

import { _height, _width, BannerList } from '../../common/config';

export default class CareerSwiper extends Component {
  state = {
    BannerList: BannerList,
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