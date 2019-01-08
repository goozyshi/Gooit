import { Dimensions } from 'react-native';
const ResisterData = [
	[{//第一组
		color: '#724832',
		value: 10,
		name: '棕'
	},{
		color: '#E83015',
		value: 1,
		name: '红'
	},{
		color: '#F75C2F',
		value: 100,
		name: '橙'
	},{
		color: '#FFB11B',
		value: 100,
		name: '黄'
	},{
		color: '#86C166',
		value: 100,
		name: '绿'
	},{
		color: '#0089A7',
		value: 100,
		name: '蓝'
	},{
		color: '#B481BB',
		value: 100,
		name: '紫'
	},{
		color: '#BDC0BA',
		value: 100,
		name: '灰'
	},{
		color: '#fffffb',
		value: 100,
		name: '白'
	}]
]
const { height, width } = Dimensions.get('window');
module.exports = {
	_height:height,
	_width:width,
	ResisterData: ResisterData
}