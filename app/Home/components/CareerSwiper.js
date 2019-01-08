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
      img: 'https://img.zcool.cn/community/01efb05c2d71f3a80121df908b5677.jpg',
      title: '站酷1',
      url: 'http://www.elecfans.com/news/hangye/20180716711222.html'
    },{
      img: 'https://img.zcool.cn/community/01efb05c2d71f3a80121df908b5677.jpg',
      title: '站酷2',
      url: 'http://www.elecfans.com/news/hangye/20180617696029.html'
    },{
      img: 'https://img.zcool.cn/community/01efb05c2d71f3a80121df908b5677.jpg',
      title: '站酷3',
      url: 'http://www.elecfans.com/news/hangye/20181211829968.html'
    } 
  ]
  }
  render(){
    const { navigate } = this.props.navigation
    return (
      <View style={styles.wrapper}>
        <Swiper
          loop={true}
          showsButtons={true} // 显示左右按钮
          removeClippedSubviews={false}
          autoplay={true}
          autoplayTimeout={3}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
        >
          { this.state.BannerList.map((item)=>{
            return(
              <TouchableOpacity 
                key={item.title}
                style={styles.slide1}
                onPress={()=>{navigate('Details', {
                      HeaderTitle:item.title,// 头条标题
                      url: item.url,//  头条链接
                    })}
                }
              >
                <Image source={{ uri: item.img }} style={styles.banner}/>
                <Text>{item.title}</Text>
              </TouchableOpacity>
            )
          })
            
          }
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: _height*0.22,
    backgroundColor: '#fff',
    margin: 10,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  banner: {
    width: _width*0.9,
    height: _height*0.2,
    borderRadius: _height*0.02
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dotStyle: {
    width: 22,
    height: 3,
    backgroundColor: '#fff',
    opacity: 0.4,
    borderRadius: 0,
  },
  activeDotStyle: {
    width: 22,
    height: 3,
    backgroundColor: '#fff',
    borderRadius: 0,
  },
})