import { Dimensions } from 'react-native';

/**
 * 四色环电阻数据
 */
const ResisterData = [
	[{//第一组：十位
		color: '#724832',
		value: 10,
		name: '棕'
	},{
		color: '#E83015',
		value: 20,
		name: '红'
	},{
		color: '#F75C2F',
		value: 30,
		name: '橙'
	},{
		color: '#FFB11B',
		value: 40,
		name: '黄'
	},{
		color: '#86C166',
		value: 50,
		name: '绿'
	},{
		color: '#0089A7',
		value: 60,
		name: '蓝'
	},{
		color: '#B481BB',
		value: 70,
		name: '紫'
	},{
		color: '#656765',
		value: 80,
		name: '灰'
	},{
		color: '#fffffb',
		value: 90,
		name: '白'
	}],
	[{//第二组：个位
		color: '#000',
		value: 0,
		name: '黑'
	},{
		color: '#724832',
		value: 1,
		name: '棕'
	},{
		color: '#E83015',
		value: 2,
		name: '红'
	},{
		color: '#F75C2F',
		value: 3,
		name: '橙'
	},{
		color: '#FFB11B',
		value: 4,
		name: '黄'
	},{
		color: '#86C166',
		value: 5,
		name: '绿'
	},{
		color: '#0089A7',
		value: 6,
		name: '蓝'
	},{
		color: '#B481BB',
		value: 7,
		name: '紫'
	},{
		color: '#656765',
		value: 8,
		name: '灰'
	},{
		color: '#fffffb',
		value: 9,
		name: '白'
	}],
	[{//第三组：幂位
		color: '#000',
		value: 0,
		name: '黑'
	},{
		color: '#724832',
		value: 1,
		name: '棕'
	},{
		color: '#E83015',
		value: 2,
		name: '红'
	},{
		color: '#F75C2F',
		value: 3,
		name: '橙'
	},{
		color: '#FFB11B',
		value: 4,
		name: '黄'
	},{
		color: '#86C166',
		value: 5,
		name: '绿'
	},{
		color: '#0089A7',
		value: 6,
		name: '蓝'
	},{
		color: '#B481BB',
		value: 7,
		name: '紫'
	},{
		color: '#656765',
		value: 8,
		name: '灰'
	},{
		color: '#fffffb',
		value: 9,
		name: '白'
	},{
		color: '#C7802D',
		value: -1,
		name: '金'
	},{
		color: '#91989F',
		value: -2,
		name: '银'
	}],
	[{//第四组：误差位
		color: '#724832',
		value: 1,
		name: '棕'
	},{
		color: '#E83015',
		value: 2,
		name: '红'
	},{
		color: '#86C166',
		value: 0.5,
		name: '绿'
	},{
		color: '#0089A7',
		value: 0.25,
		name: '蓝'
	},{
		color: '#B481BB',
		value: 0.1,
		name: '紫'
	},{
		color: '#656765',
		value: 0.05,
		name: '灰'
	},{
		color: '#C7802D',
		value: 5,
		name: '金'
	},{
		color: '#91989F',
		value: 10,
		name: '银'
	}]
]

const { height, width } = Dimensions.get('window');
module.exports = {
	_height:height,
	_width:width,
	ResisterData: ResisterData
}