import React, {Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import Picker from 'react-native-picker';
import { ResisterData } from '../../common/config';
class Caculator extends Component{
  constructor (props) {
    super(props);
    this.state = {
      firstColor: '',
      firstValue: '',
      secondColor: '',
      thirdColor: '',
      forthColor: '',
      colorArray: [...ResisterData]
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
  //打开色环颜色选择视图
  _showPicker() {
    let { colorArray } = this.state;
    console.log(this.getData())
    Picker.init({
      pickerTitleText:'电阻色环',
      pickerCancelBtnText:'取消',
      pickerConfirmBtnText:'确定',
      pickerData: this.getData(),
      selectedValue: ['绿','白'],
      onPickerConfirm: (data,index) => {
          this.setState({
            firstColor: colorArray[0][index[0]].color,
            firstValue: colorArray[0][index[0]].value,
          })
      },
      onPickerSelect: (data,index) => {
        console.log(index)
        this.setState({
          firstColor: colorArray[0][index[0]].color,
          firstValue: colorArray[0][index[0]].value,
        })
      }
    });
    Picker.show();
  }
  componentWillMount = () => {
    this._showPicker()
  }
  
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.resisterbox}>
          <View style={{marinLeft: 10, height: 40, width: 40, backgroundColor: this.state.firstColor}} />
          {/* <View style={{marinLeft: 10, height: 40, width: 20, backgroundColor: this.state.secondColor}} />
          <View style={{marinLeft: 10, height: 40, width: 20, backgroundColor: this.state.thirdColor}} />
          <View style={{marinLeft: 10, height: 40, width: 20, backgroundColor: this.state.forthColor}} /> */}
        </View>
        <View style={styles.result}>
          <Text style={styles.result_txt}>{this.state.firstValue}Ω</Text>
        </View>
        <View style={styles.content}>
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
    flexDirection: 'row',
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