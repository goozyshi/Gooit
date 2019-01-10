import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo } from 'react-native-textinput-effects';
class SearchDataSheet extends Component {
  state = {
    firstQuery: '',
  };
  render(){
    const { firstQuery } = this.state;
    return(
      <View style={styles.container}>
        <Hideo
          style={styles.input}
          iconClass={FontAwesomeIcon}
          iconName={'search'}
          iconColor={'white'}
          iconBackgroundColor={'#f2a59d'}
          inputStyle={{ color: '#464949' }}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1,
    padding: 5
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  label: {
    color: '#91627b',
    fontSize: 10
  }
})
export default SearchDataSheet;