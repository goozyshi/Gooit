import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { WebView } from "react-native-webview";
class CareerInfo extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('HeaderTitle', '详情页'),// 前面是传过来的标题，后面是备用
      /**
      *设置一个空View让标题居中
      **/
      headerRight: (
           <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
       ),
      headerTitleStyle:{
        flex:1,
        textAlign:'center',
      },
    };
  };
  render() {
    const { navigation } = this.props;
    const BannerUrl = navigation.getParam('url', '');
    return (
      <WebView
        source={{uri:BannerUrl}}
        style={{width:'100%',height:'100%'}}
        startInLoadingState={true}
        renderError={() => {
            console.log('renderError')
            return <View><Text>网络出问题啦！404</Text></View>
        }}
        renderLoading={() => {
            return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>正在加载Loading...</Text></View>
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366', 
  },
});

export default CareerInfo;
