import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View, 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class ItemBox extends Component {
  render(){
    return(
      <View style={[styles.container, this.props._style]}>
        <View style={styles.head}>
          <View style={styles.headcom}>
            <Text style={styles.title}>*&nbsp;&nbsp;{this.props.title}&nbsp;&nbsp;*</Text>
          </View>
        </View>
        {this.props._component}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  headcom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  }
});
export default ItemBox;