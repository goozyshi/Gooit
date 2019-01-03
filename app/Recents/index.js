import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Test from './components/test';
class RecentsScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity onPress={()=>{navigate('Details')}}>
        <Text>RecentsRoute</Text>
      </TouchableOpacity>
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