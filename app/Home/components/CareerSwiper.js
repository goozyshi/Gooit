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
          { this.state.BannerList.map((item)=>(
                <TouchableOpacity 
                  key={item.title}
                  style={styles.slide}
                  onPress={()=>{navigate('Details', {
                        HeaderTitle:item.title,// 头条标题
                        url: item.url,//  头条链接
                      })}
                  }
                >
                  <Image source={{ uri: item.img }} style={styles.banner}/>
                </TouchableOpacity>
              )
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
    padding: 11,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: _width*0.9,
    height: _height*0.2,
    marginBottom: 10,
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