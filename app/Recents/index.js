import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Test from './components/test';
class RecentsScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      // <TouchableOpacity onPress={()=>{navigate('Details')}}>
      //   <Text>RecentsRoute</Text>
      // </TouchableOpacity>
      <ParallaxScrollView
        backgroundColor="#91989F"
        contentBackgroundColor="pink"
        parallaxHeaderHeight={300}
        renderForeground={() => (
        <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={{uri: 'https://img.zcool.cn/community/01ffc75b1fb5afa8012034f79b3ed3.jpg@1280w_1l_0o_100sh.jpg'}} style={{height: 150, width: 300}}/>
            <Text>Hello World!</Text>
          </View>
        )}>
        <View style={{ height: 500 }}>
          <Text>Scroll me</Text>
        </View>
      </ParallaxScrollView>
    )
  }
}
const RecentsRootStack = createStackNavigator(
  {
    Recents: RecentsScreen,
    Details: Test
  },
  {
    initialRouteName: 'Recents',
    headerMode: 'none'
  }
);
const RecentsContainer = createAppContainer(RecentsRootStack);
class Recents extends Component {
  render() {
    return <RecentsContainer />;
  }
}
export default Recents;