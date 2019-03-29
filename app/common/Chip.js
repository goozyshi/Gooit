import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { _height, _width } from './config';
import { Divider, DataTable } from 'react-native-paper';
import BackButton from '../common/BackButton';
class Chip extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('HeaderTitle', '参数列表'),// 前面是传过来的标题，后面是备用
      /**
      *设置一个空View让标题居中
      **/
      headerLeft: <BackButton pop={ navigation.pop } name = {'chevron-left'}/>,
      headerRight: (
           <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
       ),
      headerTitleStyle:{
        flex:1,
        textAlign:'center',
      },
    };
  };
  state = {
    data: [],
    page: 0,
    current: 1,
  };

  componentWillMount() {
    let rawdata = this.props.navigation.getParam('data', []);
    this.setState({data: rawdata})
  }

  render() {
    let type = this.props.navigation.getParam('type', '');
    const { navigate } = this.props.navigation;
    let { data, page, current } = this.state;
    let total = Math.ceil(data.detail.length / 8)
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.name}>{data.name}</Text>
          <Divider style={styles.divider}/>
          <View style={styles.download}>
            <Text style={styles.company}>元件分类：{type === 'ne555' ? '模拟器件': '逻辑门'}</Text>
            <TouchableOpacity onPress={()=>{navigate('PDFView', {name: data.name, pdfUrl: this.state.data.pdf})}}>
              <Text style={styles.pdf}>
                    详情 <Icon name={'file-pdf'} size={17} color={'#fff'} style={{margin: 10}}/></Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.company}>厂商名称：{data.company}</Text>
          <Text style={styles.desc}>中文描述：{data.desc.ch}</Text>
          <Text style={styles.desc}>英文描述：{data.desc.en}</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.tag}>参数列表</Text>
          <DataTable style={styles.table}>
            <DataTable.Header>
              <DataTable.Title>参数名称</DataTable.Title>
              <DataTable.Title numeric>数值</DataTable.Title>
            </DataTable.Header>
            
            { data.detail.map((item, index)=>
                ( 8*page <= index && index < 8*(page+1) )?
                <DataTable.Row key={item.title}>
                  <DataTable.Cell>{item.title}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.val}</DataTable.Cell>
                </DataTable.Row>
                : null
              )}
            <DataTable.Pagination
              page={page}
              numberOfPages={total}
              onPageChange={(page) => { this.setState({page: page, current: page+1}) }}
              label={'第' + current + '页，共' + total + '页'}
            />
        </DataTable>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  info: {
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 10,
  },
  download: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  divider: {
    margin: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  company: {
    fontSize: 16,
    margin: 10,
    color: '#444'
  },
  desc: {
    fontSize: 16,
    margin: 10,
    color: '#444'
  },
  pdf: {
    fontSize: 16,
    padding: 14,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'red',
    color: '#fff',
    fontWeight: '500',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tag: {
    width: _width*0.15,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 18,
    backgroundColor: 'red',
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center'
  },
  table: {
    backgroundColor: '#fff'
  }
});
export default Chip;
