import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  ToastAndroid,
  StyleSheet
} from 'react-native';
import { List, Divider } from 'react-native-paper';
import CustomStorage from '../../common/CustomStorage';

class FeatureList extends Component {
  state = {
    expanded: true,
    favor_arr: []
  }

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded,
  });
  
  async componentWillMount() {
    let temp = await CustomStorage.get('favor')
    if(temp){
      var arr = [...this.state.favor_arr]
      arr.push(temp);
      this.setState({
        favor_arr: arr,
      },()=>{
        console.log(this.state.favor_arr)
      })
    }
  };
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <List.Section title="个人中心">
          <List.Accordion
            title="我的收藏"
            left={props => <List.Icon {...props} icon="favorite" />}
          >
          {
            this.state.favor_arr && this.state.favor_arr.map((item)=><List.Item key={item} title={item} />)
          }
          </List.Accordion>
          <Divider />
          <List.Accordion
            title="主题定制"
            left={props => <List.Icon {...props} icon="insert-emoticon" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
        <View style={{height: 10, backgroundColor: '#f5f5f5'}}/>
        <List.Section title="更多">
          <List.Accordion
            title="意见反馈"
            left={props => <List.Icon {...props} icon="thumbs-up-down" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <Divider />
          <List.Accordion
            title="关于Gooit"
            left={props => <List.Icon {...props} icon="info" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#fff'
  }
});
export default FeatureList;