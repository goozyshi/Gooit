import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';
export default class CareerSwiper extends Component {
  state = {
    BannerList: [{
      img: 'https://img.zcool.cn/community/01efb05c2d71f3a80121df908b5677.jpg',
      title: '站酷1',
      url: 'https://github.com/goozyshi/Mynote/blob/master/D%26A/Data/Stack%E5%A0%86%E6%A0%88.md'
    },{
      img: 'https://img.zcool.cn/community/01efb05c2d71f3a80121df908b5677.jpg',
      title: '站酷2',
      url: 'https://github.com/goozyshi/Mynote/blob/master/D%26A/DataStructure.md'
    },{
      img: 'https://img.zcool.cn/community/01efb05c2d71f3a80121df908b5677.jpg',
      title: '站酷3',
      url: 'https://github.com/goozyshi/Mynote/blob/master/D%26A/Algorithm.md'
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
    height: 150,
  },
  slide1: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    borderRadius: 5
  },
  slide2: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
    borderRadius: 5
  },
  slide3: {
    flex: 1,
    margin: 10,
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