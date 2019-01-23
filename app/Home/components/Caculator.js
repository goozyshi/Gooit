import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground
} from 'react-native';
import Picker from 'react-native-picker';
import { Button } from 'react-native-paper';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import { ResisterFour, ResisterFive, _height, _width } from '../../common/config';
class Four_Caculator extends Component{
  constructor (props) {
    super(props);
    this.state = {
      firstColor: '',
      firstValue: '',
      secondColor: '',
      thirdColor: '',
      forthColor: '',
      colorArray: ResisterFour, //电阻数据 
    }
  };

  /**
   * 获取选择器初始数据
   */
  getData=()=>{
    let { colorArray } = this.state;
    let data = [];
    for (let i = 0; i<colorArray.length; i++){
      let temp = [];
      colorArray[i].map((item)=>{
        temp.push(item.name)
      })
      data[i]=temp;
    }
    return data;
  };

  /**
   * 打开色环颜色选择视图
   */
  _showPicker() {
    let { colorArray } = this.state;
    Picker.init({
      pickerTitleText: '四色环电阻',
      pickerCancelBtnText: '取消',
      pickerConfirmBtnText: '确定',
      pickerData: this.getData(),
      selectedValue: ['棕', '黑', '黑', '棕'],
      pickerHeight: 550,
      onPickerConfirm: (data,index) => {
          this.setState({
            firstColor: colorArray[0][index[0]].color,
            firstValue: colorArray[0][index[0]].value,
            secondColor: colorArray[1][index[1]].color,
            secondValue: colorArray[1][index[1]].value,
            thirdColor: colorArray[2][index[2]].color,
            thirdValue: colorArray[2][index[2]].value,
            forthColor: colorArray[3][index[3]].color,
            forthValue: colorArray[3][index[3]].value,
          })
      },
      onPickerSelect: (data,index) => {
        this.setState({
          firstColor: colorArray[0][index[0]].color,
          firstValue: colorArray[0][index[0]].value,
          secondColor: colorArray[1][index[1]].color,
          secondValue: colorArray[1][index[1]].value,
          thirdColor: colorArray[2][index[2]].color,
          thirdValue: colorArray[2][index[2]].value,
          forthColor: colorArray[3][index[3]].color,
          forthValue: colorArray[3][index[3]].value,
        })
      }
    });
    Picker.show();
  };

  /**
   * 四环电阻计算部分
   */
  counter = () => {
    let { firstValue, secondValue, thirdValue, forthValue } = this.state;
    let fault = forthValue || 1;// 误差
    let ex = thirdValue;// 指数
    let num = '10';
    let unit = 'Ω';
    let reg=/\.\d{2,}/
    if(ex<2){
       num = (firstValue + secondValue)*Math.pow(10,ex) ;// 数值部分
       unit = 'Ω'
    }else if (2<=ex && ex<=4){
       num = (firstValue + secondValue)*Math.pow(10,ex-3)
       unit = 'KΩ'
    }else if(ex>4){
       num = (firstValue + secondValue)*Math.pow(10,ex-6);
       unit = 'MΩ'
    }
    if(reg.test(num)){
      num = num.toFixed(2) // 解决JavaScript精度问题，保存两位有效数字
    }
    let result = num + ' ' + unit + ' ' + '±' + ' ' + fault + '%';
    return result
  };

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.resisterbox}>
          <ImageBackground source={require('../../../res/resister.png')} resizeMode='contain' style={styles.register}>
            <View style={styles.box}>
              <View style={{height: _height * 0.092, width: 15, opacity: 0.875, backgroundColor: this.state.firstColor || '#724832'}} />
              <View style={{height: _height * 0.07, width: 15, opacity: 0.875, backgroundColor: this.state.secondColor || '#000'}} />
              <View style={{height: _height * 0.07, width: 15, opacity: 0.875, backgroundColor: this.state.thirdColor || '#000'}} />
              <View style={{height: _height * 0.092, width: 15, opacity: 0.875, backgroundColor: this.state.forthColor || '#724832'}} />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.result}>
          <Text style={styles.result_txt}>{this.counter()}</Text>
          <Button mode="contained" onPress={()=>this._showPicker()} color='#072'>
            <Text style={styles.textStyle} style={{fontSize: 22}}>点击选择</Text>
          </Button>
        </View>
        <View style={styles.tip_box}>
          <Text style={styles.content}><Text style={styles.title}>Tips：</Text>棕一红二橙是三，四黄五绿六为蓝，七紫八灰九对白，黑是零，金五银十表误差.</Text>
        </View>
      </View>
    )
  }
}

class Five_Caculator extends Component{
  constructor (props) {
    super(props);
    this.state = {
      firstColor: '',
      firstValue: '',
      secondColor: '',
      thirdColor: '',
      forthColor: '',
      fifthColor: '',
      colorArray: ResisterFive, //电阻数据 
    }
  };

  /**
   * 获取选择器初始数据
   */
  getData=()=>{
    let { colorArray } = this.state;
    let data = [];
    for (let i = 0; i<colorArray.length; i++){
      let temp = [];
      colorArray[i].map((item)=>{
        temp.push(item.name)
      })
      data[i]=temp;
    }
    return data;
  };

  /**
   * 打开色环颜色选择视图
   */
  _showPicker() {
    let { colorArray } = this.state;
    Picker.init({
      pickerTitleText: '五色环电阻',
      pickerCancelBtnText: '取消',
      pickerConfirmBtnText: '确定',
      pickerData: this.getData(),
      selectedValue: ['棕', '黑', '黑', '黑', '棕'],
      pickerHeight: 550,
      onPickerConfirm: (data,index) => {
          this.setState({
            firstColor: colorArray[0][index[0]].color,
            firstValue: colorArray[0][index[0]].value,
            secondColor: colorArray[1][index[1]].color,
            secondValue: colorArray[1][index[1]].value,
            thirdColor: colorArray[2][index[2]].color,
            thirdValue: colorArray[2][index[2]].value,
            forthColor: colorArray[3][index[3]].color,
            forthValue: colorArray[3][index[3]].value,
            fifthColor: colorArray[4][index[4]].color,
            fifthValue: colorArray[4][index[4]].value,
          })
      },
      onPickerSelect: (data,index) => {
        this.setState({
          firstColor: colorArray[0][index[0]].color,
          firstValue: colorArray[0][index[0]].value,
          secondColor: colorArray[1][index[1]].color,
          secondValue: colorArray[1][index[1]].value,
          thirdColor: colorArray[2][index[2]].color,
          thirdValue: colorArray[2][index[2]].value,
          forthColor: colorArray[3][index[3]].color,
          forthValue: colorArray[3][index[3]].value,
          fifthColor: colorArray[4][index[4]].color,
          fifthValue: colorArray[4][index[4]].value,
        })
      }
    });
    Picker.show();
  };

  /**
   * 五环电阻计算部分
   */
  counter = () => {
    let { firstValue, secondValue, thirdValue, forthValue, fifthValue } = this.state;
    let fault = fifthValue || 1;// 误差
    let ex = forthValue;// 指数
    let num = '100';
    let unit = 'Ω';
    let reg=/\.\d{2,}/
    if(ex<1){
        num = (firstValue + secondValue + thirdValue)*Math.pow(10,ex) ;// 数值部分
        unit = 'Ω'
    }else if (1<=ex && ex<=3){
       num = (firstValue + secondValue + thirdValue)*Math.pow(10,ex-3)
       unit = 'KΩ'
    }else if(ex>3){
       num = (firstValue + secondValue + thirdValue)*Math.pow(10,ex-6);
       unit = 'MΩ'
    }
    if(reg.test(num)){
      num = num.toFixed(2) // 解决JavaScript精度问题，保存两位有效数字
    }
    let result = num + ' ' + unit + ' ' + '±' + ' ' + fault + '%';
    return result
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.resisterbox}>
          <ImageBackground source={require('../../../res/resister.png')} resizeMode='contain' style={styles.register}>
            <View style={styles.box}>
              <View style={{height: _height * 0.092, width: 15, opacity: 0.875, backgroundColor: this.state.firstColor || '#724832'}} />
              <View style={{height: _height * 0.07, width: 15, opacity: 0.875, backgroundColor: this.state.secondColor || '#000'}} />
              <View style={{height: _height * 0.07, width: 15, opacity: 0.875, backgroundColor: this.state.thirdColor || '#000'}} />
              <View style={{height: _height * 0.07, width: 15, opacity: 0.875, backgroundColor: this.state.forthColor || '#000'}} />
              <View style={{height: _height * 0.092, width: 15, opacity: 0.875, backgroundColor: this.state.fifthColor || '#724832'}} />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.result}>
          <Text style={styles.result_txt}>{this.counter()}</Text>
          <Button mode="contained" onPress={()=>this._showPicker()} color='#072'>
            <Text style={styles.textStyle} style={{fontSize: 22}}>点击选择</Text>
          </Button>
        </View>
        <View style={styles.tip_box}>
          <Text style={styles.content}><Text style={styles.title}>Tips：</Text>棕一红二橙是三，四黄五绿六为蓝，七紫八灰九对白，黑是零，金五银十表误差.</Text>
        </View>
      </View>
    )
  }
}

export default () => {
  return <ScrollableTabView
    style={{marginTop: 15, flex: 1}}
    initialPage={1}
    renderTabBar={() => <ScrollableTabBar />}
  >
    <Four_Caculator tabLabel='3' />
    <Four_Caculator tabLabel='4' />
    <Five_Caculator tabLabel='5' />
    <Four_Caculator tabLabel='6' />
  </ScrollableTabView>;
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  },
  resisterbox: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  register: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '53%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginLeft: 5,
    alignItems: 'center',
  },
  result: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    backgroundColor: '#072'
  },
  result_txt: {
    fontSize: 30,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10
  },
  content:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
  },
  textStyle:{
    justifyContent: 'center',
    alignItems: 'center'    
  },
  tip_box: {
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginBottom: 5,
    fontSize: 20,
    color: '#333',
    fontWeight: '500'
  },
  content: {
    fontSize: 18,
    color: '#444'
  }
})
