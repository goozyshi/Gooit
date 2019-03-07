import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ToastAndroid
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import CheckBox from 'react-native-check-box';
import ToggleFooter from '../../common/ToggleFooter';
import { _height, _width, exdata } from '../../common/config';
class Edu extends Component {
  state = {
    isLearned: false, // 是否开始学习
    checked_arr: [],
    accomplish: 0, // 已完成进度
    all: 0,// 总进度
    title: '',
    banner_url: '',
  }
  
  componentWillMount = () => {
    //获取props
    let temp_img = this.props.navigation.getParam('banner_url','https://dn-simplecloud.shiyanlou.com/1523348726316.png');
    let temp_title = this.props.navigation.getParam('title','备用');
    //创建check数组
    let temp_arr = [];
    for(let i =0; i<exdata.length; i++){
      temp_arr[i]= false;
    }
    this.setState({
      checked_arr: [...temp_arr],
      title: temp_title,
      banner_url: temp_img
    })
  }

  changeState(index){
    const { navigate } = this.props.navigation;
    let { checked_arr, accomplish } = this.state;
    if(index !=0 && checked_arr[index-1] != true){
      ToastAndroid.show("请一步一步来，谢谢!", ToastAndroid.SHORT);
    }else {
      if(checked_arr[index]!= true ){
        accomplish++; // 进度加一
      };
      checked_arr[index] = true;
      this.setState({
        isLearned: true,
        checked_arr: checked_arr,
        accomplish: accomplish
      },()=>{
        navigate('SearchDataSheet')
      });
    }
  }

  
  render() {
    let { isLearned, accomplish, banner_url, title } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.box_banner}>
          <Image 
            source={{uri:banner_url}}
            style={styles.banner}
          />
        </View>
        <ScrollableTabView
          style={styles.scrolltab}
          initialPage={0}
          tabBarActiveTextColor={'#24936E'}// 标签选择颜色
          tabBarInactiveTextColor={'#666'} // 标签未选中颜色
          tabBarUnderlineStyle={{backgroundColor:'#24936E', height:2}}// 下划线样式
          renderTabBar={() => <ScrollableTabBar />}
          >
          <Profile tabLabel='信息简介'/>
          <ExperimentList
            tabLabel='课程列表'
            isLearned={this.state.isLearned}
            checked_arr={this.state.checked_arr}
            extra = {this.state}
            onPress={(index)=>this.changeState(index)}
          />
        </ScrollableTabView>
        <ToggleFooter isLearned={isLearned} accomplish={accomplish} title={title} banner={banner_url}/>
      </View>
    );
  }
}

/**
 * 课程简介
 */
class Profile extends Component {
  render(){
    return (
      <View style={styles.box_content}>
        <Text style={styles.text}>
          &nbsp;&nbsp;&nbsp;&nbsp;本课程讲解 C 语言的开发环境以及对 C 语言的剖析，引入大量的 C 语言程序案例，把算法和语法结合起来，
          通过引导大家由浅入深地编写 C 程序，让大家掌握 C 语言。我们将从中学会 C 语言语法、数组、模块化程序设计指针、文件的输入与输出等。
        </Text>
      </View>
    )
  }
}

/**
 * 课程列表
 */
class ExperimentList extends Component {
  onPress(index){
    this.props.onPress(index)
  }
  render(){
    return(
      <View style={styles.box_content}>
        <FlatList
          data={ exdata }
          extraData={this.props.extra}// Tips:额外属性最好设置成this.state而不是state中的某个值，因为FlatList是PureComponnet,props在===比较中出现变化才会刷新
          keyExtractor={item => item.extitle}
          showsVerticalScrollIndicator={false}//  水平进度条
          renderItem={({item, index}) => 
            <TouchableOpacity style={styles.excontainer} onPress={()=>{this.onPress(index)}}>
              <View style={styles.check}>
                  <CheckBox
                    isChecked={this.props.checked_arr[index]}
                    checkedCheckBoxColor={'#24936E'}// 勾选颜色
                    uncheckedCheckBoxColor={'#eee'}// 未勾选颜色
                    onClick={()=>{this.onPress()}}
                  />
                <Text style={styles.extitle}>{index+1}.{item.extitle}</Text>
              </View>
              { (item.exsub!='') && (
                <View style={styles.tagbox}>
                  <Text style={styles.extag}>知识点</Text><Text style={styles.exsub} numberOfLines={1} ellipsizeMode='tail'>{item.exsub}</Text>
                </View>
              )}
            </TouchableOpacity>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box_banner: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  banner: {
    height: _height*0.22,
    width: _width*0.7,
    borderRadius: _height*0.01
  },
  scrolltab: {
    flex: 0.7,
  },
  box_content: {
    flex:1,
    justifyContent: 'space-between',
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    fontSize: 14,
    color: '#666',
  },
  excontainer: {
    margin: 5
  },
  check: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  extitle: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '500',
    color: '#333'
  },
  tagbox: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: _width*0.8,
  },
  extag: {
    borderWidth: 1,
    borderColor: '#24936E',
    fontSize: 10,
    padding: 2,
    textAlign: 'center',
    marginRight: 3,
    flexWrap: 'wrap'// 折行配合TextInput的numberOfLines={1} ellipsizeMode='tail'以省略号结束
  },
  exsub: {
    fontSize: 11,
  }
})
export default Edu;
