import { Dimensions } from 'react-native';

/**
 * 四色环电阻数据
 */
const ResisterFour = [
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
];

/**
 * 五色环电阻数据
 */
const ResisterFive = [
	[{//第一组：百位
		color: '#724832',
		value: 100,
		name: '棕'
	},{
		color: '#E83015',
		value: 200,
		name: '红'
	},{
		color: '#F75C2F',
		value: 300,
		name: '橙'
	},{
		color: '#FFB11B',
		value: 400,
		name: '黄'
	},{
		color: '#86C166',
		value: 500,
		name: '绿'
	},{
		color: '#0089A7',
		value: 600,
		name: '蓝'
	},{
		color: '#B481BB',
		value: 700,
		name: '紫'
	},{
		color: '#656765',
		value: 800,
		name: '灰'
	},{
		color: '#fffffb',
		value: 900,
		name: '白'
	}],
	[{//第二组：十位
		color: '#000',
		value: 0,
		name: '黑'
	},{
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
	[{//第三组：个位
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
	[{//第四组：幂位
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
	[{//第五组：误差位
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
];

/**
 * 列表数据
 */
const exdata = [{
  extitle: '为什么是 C ——因为你无可替代',
  exsub: '1.如何学习C语言 2.第一个`helloshiyanlou`程序'
},{
  extitle: '开发环境和剖析第一个 C 语言',
  exsub: '1.C程序创建及其运行'
},{
  extitle: '挑战：输出I love shiyanlou!',
  exsub: ''
},{
  extitle: '顺序程序设计 - 数据类型（一）',
  exsub: '1.数据类型 2.运算符与表达式 3.C语句 4.数据的输入与输出'
},{
  extitle: '顺序程序设计 - 数据类型（二）',
  exsub: '1.字符型数据 2.浮点型数据'
},{
  extitle: '顺序程序设计 - 运算符和数据转换',
  exsub: '1.基本的算数运算符 2.自增、自减运算符 3.不同数据类型之间的混合运算 4.强制类型转换 5.数据的输入和输出'
},{
  extitle: '挑战：摄氏转华氏温度',
  exsub: ''
},{
  extitle: '选择程序设计',
  exsub: ' 1.条件判断案例 2.用`if`语句实现选择结构 3.关系运算符和关系表达式 4.逻辑运算符和逻辑表达式 5.条件运算符和条件表达式 6.用`switch`语句实现多分支选择结构'
},{
  extitle: '循环程序设计',
  exsub: '1.用`while`语句实现循环 2.用`dowhile`语句实现循环 3.用`for`语句实现循环 4.改变循环的执行状态 5.循环的嵌套'
},{
  extitle: '挑战：序列求和',
  exsub: ''
},{
  extitle: 'C 语言数组',
  exsub: '1.一维数组 2.二维数组 3.字符串数组'
},{
  extitle: '模块化程序设计',
  exsub: '1.函数的定义 2.函数的嵌套调用 3.递归函数 4.数组与函数'
},{
  extitle: '指针（一）',
  exsub: '1.指针是什么 2.指针变量 3.通过指针引用数组 4.通过指针引用字符串'
},{
  extitle: '指针（二）',
  exsub: '1.指针引用字符串'
},{
  extitle: '挑战：修复指针使用错误的 BUG',
  exsub: ''
},{
  extitle: '文件和文件的输入与输出',
  exsub: '1.文件 2.打开和关闭文件 3.文件的输入与输出'
}];

/**
 * 用户组
 */
const user = [{
	name: '老师A',
	department: '电子科学与技术学院',
	img: 'https://img.zcool.cn/community/01b4ed59b4fb8ba8012028a9789f84.jpg@1280w_1l_2o_100sh.jpg',
	favorite: [],
	type: 'A'
},{
	name: '学生B',
	department: '电子科学与技术',
	img: 'https://img.zcool.cn/community/0150a35645483e32f87512f682d363.jpg@1280w_1l_2o_100sh.jpg',
	favorite: [],
	type: 'B'
},{
	name: '学生C',
	department: '微电子科学与工程',
	img: 'https://img.zcool.cn/community/046cca553f71a100000199876ebc3b.jpg@120w_160h_1c_1e_1o_100sh.jpg',
	favorite: [],
	type: 'C'
}];

const { height, width } = Dimensions.get('window');
module.exports = {
	_height:height,
	_width:width,
	ResisterFour: ResisterFour,
	ResisterFive: ResisterFive,
	exdata: exdata,
	user: user,
}