import React, {Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import Picker from 'react-native-picker';
class Caculator extends Component{
  constructor (props) {
    super(props);
    this.state = {
      firstColor: '',
      firstValue: '',
      secondColor: '',
      thirdColor: '',
      forthColor: '',
      colorArray: [
        [{c:'#000', v: '10'}, {c:'#eee', v: '1'}, {c:'#072', v: '100'}],
        // ['#000', '#eee', '#072'],
        // ['#000', '#eee', '#072'],
        // ['#000', '#eee', '#072'],
      ]
    }
  }
  //打开色环颜色选择视图
  _showPicker() {
    let { colorArray } = this.state;
    let data = [
      ['黑','白','绿'],
      // ['黑','白','绿'],
      // ['黑','白','绿'],
      // ['黑','白','绿'],
    ];
    Picker.init({
      pickerTitleText:'电阻色环',
      pickerCancelBtnText:'取消',
      pickerConfirmBtnText:'确定',
      pickerData: data,
      selectedValue: ['黑'],
      onPickerConfirm: (data,index) => {
          this.setState({
            firstColor: colorArray[0][index[0]].c,
            firstValue: colorArray[0][index[0]].v,
            // secondColor: colorArray[1][index[1]],
            // thirdColor: colorArray[2][index[2]],
            // forthColor: colorArray[3][index[3]],
          })
      },
      onPickerSelect: (data,index) => {
        this.setState({
          firstColor: colorArray[0][index[0]].c,
          firstValue: colorArray[0][index[0]].v,
          // secondColor: colorArray[1][index[1]],
          // thirdColor: colorArray[2][index[2]],
          // forthColor: colorArray[3][index[3]],
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
          <View style={{marinLeft: 10, height: 40, width: 20, backgroundColor: this.state.firstColor}} />
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
    alignItems:'center'
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