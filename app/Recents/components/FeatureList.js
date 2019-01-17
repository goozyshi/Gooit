import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet
} from 'react-native';
import { List, Divider } from 'react-native-paper';

class FeatureList extends Component {
  state = {
    expanded: true
  }

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <List.Section title="个人中心">
          <List.Accordion
            title="我的收藏"
            left={props => <List.Icon {...props} icon="favorite" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
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