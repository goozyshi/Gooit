import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image} from 'react-native';
import Picker from 'react-native-picker';

import { ResisterData, _height, _width } from '../../common/config';
class Caculator extends Component{
  constructor (props) {
    super(props);
    this.state = {
      firstColor: '',
      firstValue: '',
      secondColor: '',
      thirdColor: '',
      forthColor: '',
      colorArray: ResisterData, //电阻数据 
    }
  }

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
    return data
  }

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
  }

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
  }

  componentWillMount = () => {
    this._showPicker()
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.resisterbox}>
        <ImageBackground source={require('../../../res/resister.png')} resizeMode='contain' style={styles.register}>
          <View style={styles.box}>
            <View style={{height: _height * 0.07, width: 15, backgroundColor: this.state.firstColor || '#724832'}} />
            <View style={{height: _height * 0.07, width: 15, backgroundColor: this.state.secondColor || '#000'}} />
            <View style={{height: _height * 0.07, width: 15, backgroundColor: this.state.thirdColor || '#000'}} />
            <View style={{height: _height * 0.07, width: 15, backgroundColor: this.state.forthColor || '#724832'}} />
          </View>
        </ImageBackground>
        </View>
        <View style={styles.result}>
          <Text style={styles.result_txt}>{this.counter()}</Text>
          <TouchableOpacity onPress={()=>this._showPicker()}>
            <Text style={styles.textStyle}>点击选择</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#ECF1F0'
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
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 2,
    marginLeft: 5,
    alignItems: 'center',
  },
  result: {
    margin: 20,
  },
  result_txt: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333'
  },
  content:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
  },
  textStyle:{
    fontSize: 18,
  }
})

export default Caculator;