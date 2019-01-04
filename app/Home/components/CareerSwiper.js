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
      url: 'https://yuchengkai.cn/docs/frontend/#typeof'
    },{
      img: 'https://img.zcool.cn/community/01efb05c2d71f3a80121df908b5677.jpg',
      title: '站酷2',
      url: 'https://www.baidu.com/'
    },{
      img: 'https://img.zcool.cn/community/01efb05c2d71f3a80121df908b5677.jpg',
      title: '站酷3',
      url: 'http://www.elecfans.com/news/hangye/20181211829968.html'
    },{
      img: 'https://img.zcool.cn/community/01efb05c2d71f3a80121df908b5677.jpg',
      title: '站酷4',
      url: 'https://yuchengkai.cn/docs/frontend/#typeof'
    },{
      img: 'https://img.zcool.cn/community/01efb05c2d71f3a80121df908b5677.jpg',
      title: '站酷5',
      url: 'https://www.baidu.com/'
    },{
      img: 'https://img.zcool.cn/community/01efb05c2d71f3a80121df908b5677.jpg',
      title: '站酷6',
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
          autoplay={true}
          autoplayTimeout={2.5}
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
    marginBottom: 10,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    borderRadius: 5
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
    borderRadius: 5
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    borderRadius: 5
  },
  banner: {
    height: 120,
    width: 200
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