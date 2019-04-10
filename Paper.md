## 摘要
随着互联网的兴起，移动开发应用，尤其在 Android 和 iOS 平台上的开发趋势，日益火热。不少高校也加快校园信息化建设，推出了互联网+智慧校园的发展规划。然而，传统的 Android 或者 iOS 开发模式在面对日益多样化的移动终端诸如各种形式的安卓手机、平板以及iPhone等，不得不选择了多种平台重复开发的方案。 2015 年 Facebook 推出了一款名为 ReactNative 的基于 Javascript 构建原生应用的框架，它强调了“一次学习，随处可写”，从而解决了传统开发模式代码无法复用的难题。
  
论文研究内容正是基于 ReactNative 技术致力于在 Android 系统上为高校提供本科实验室便捷学习平台以及项目跟踪管理的辅助程序。程序主要包括以下四大核心功能模块，依次为：元器件数据手册查询模块、电子实验室用计算器模块、项目管理模块以及用户注册登录模块。程序使用 ReactNative 框架实现移动App页面设计，采用 VS Code 编辑器编写，后端服务器则选择 Node.JS + Express + Mysql 这一轻量级组合来完成业务所需求的存储功能。经过 Android 平台多端的测试，程序符合预期业务需求，达到了预期效果。

关键字： 实验室；ReactNative；学习辅助；项目追踪管理；

## Abstract
With the rise of the Internet, mobile development applications, especially on Android and iOS platforms, are becoming increasingly hot.Many colleges and universities have also accelerated the construction of campus information, and launched the development plan of the Internet + smart campus.However, the traditional Android or iOS development mode has to choose a repetitive development solutions of  variety platform in the face of increasingly diverse mobile terminals such as various forms of Android phones, tablets and iPhone. In 2015, Facebook published a framework for building native applications based on Javascript called ReactNative, which emphasizes “Learning once, write anywhere”, which solves the problem that traditional development mode code cannot be reused.

The research content of this thesis is based on ReactNative technology, which is dedicated to providing colleges and universities with convenient learning platform for undergraduate laboratory and project tracking management.The program mainly includes the following four core functional modules, which are: component DataSheet query module, electronic laboratory calculator module, project management module and user registration login module.The program uses the ReactNative framework to implement mobile App page design, written in the VS Code editor, and the back-end server chooses the lightweight combination of Node.JS + Express + Mysql to complete the storage functions required by the business.After testing on the Android platform, the program meets the expected business needs and achieves the expected results.

Key words: laboratory; ReactNative; Assisted Learing; Project tracking management;

## 一. 引言
### 1.1 课题来源及研究目的和意义

自 4G 网络正式普及以来，移动互联网的高速发展离不开智能终端的普及应用。国内诸如华为、小米、OPPO等安卓手机以相比较于 iPhone 更易于让大多数人接受的价格迅速占领手机市场份额，而国内微信、支付宝等移动应用的出现更是让国人离不开手机所带来的便捷生活方式。据《中国互联网络发展状况统计报告》中指出，中国上网用户早已达到了 7.1  亿，其中手机上网用户便高达 90% 以上，在庞大的用户规模以及其背后所形成的巨大利益需求链的驱使下，移动手机应用层出不穷、蓬勃发展，迅速占领人们生活的方方面面。移动互联网技术不断的更新迭代，也使得移动互联网络相比以前更加多样化、立体化，移动互联网产品的快速发展，与移动互联网相辅相成，将使我们生活在一个高效、互联的网络时代。

在 2015 年 Facebook 正式宣布 ReactNative 开源使用后，其组件化的思想以及高度的复用性和可拓展性使得ReactNative在软件开发者群体中越来越受欢迎，是当前移动软件开发中名列前茅的技术。ReactNative 使用 React 库 以及 JavaScript 编写和构建原生移动应用，通过声明式的组件机制来搭建丰富多彩的用户界面，并可以完美兼容与使用Object-C、Java或者Swift原生编写的组件进行混合开发，可以带来极佳用户体验。论文选题内容正是基于ReactNative 技术，致力于在 Android 系统上构建一款高校本科实验室便捷学习以及项目跟踪管理的学习辅助程序，让高校学生在实验室自由探索学习的同时，可以更加便捷的使用该程序进行资料查询和及时反馈老师发布的项目进度，对学生的个人快速成长以及实验室项目规范管理有重大意义。

### 1.2 移动开发国内外研究现状

当前的国内外主流的移动App开发模式主要有传统开发模式的Native App开发模式、Web App开发模式和Hybrid App 开发模式以及最近热门的ReactNative开发模式。

1.2.1 Native App 开发模式

即传统的原生App开发模式，开发出来即是原生应用程序。在Android系统上使用Java语言进行开发而在iOS系统上则使用Swift或者Object-C语言进行开发，编译之后的代码可以直接运行在系统底层，并可以调用系统底层API能带来最佳的用户体验。经过开发出来的程序是一个独立的App且可以发布到各大应用商店。

Native App开发模式的优点在于编写出来的代码直接依托于手机操作系统，能够给用户提供最优质的界面交互体验，性能在相比较于其他的开发模式是最好的。由于可以直接调用官方提供的底层API，使得其可以充分利用系统资源条件，可以进行本地资源的操作、通知以及渲染复杂的动画，功能强大。

而Native App 开发模式的缺点也比较明显。一方面由于Android和iOS编写语言的不同使得应用的开发成本相比于其他模式要高。企业不得不在保证两个平台间应用功能的一致性前提下，必须要有各自系统的开发人员，耗费大量人力；另一方面应用发布上线后，应用无法进行及时的更新迭代。这是因为在iOS中发布到AppStore上的应用，必须通过AppStore的地址进行更新而且每次都需要进行额外的应用审核从而无法达到及时更新的效果，而在Android系统中，用户也只能通过重新下载整包的应用Apk进行更新迭代的操作。在这样的条件限制下，项目上线之后的维护也变得较为复杂。


1.2.2 Web App 开发模式

即网页开发模式,通过前端开发人员使用HTML + CSS + JS编写页面并将其部署在相应的务器上,而后用户直接通过浏览器访问即可使用，这一点比较吸引用户。Web App 可通过浏览器直接访问的特点使得其具备跨Android、iOS双平台的能力，而页面的更新维护也能通过前端人员的代码重写调试后重新部署到服务器上来实现，因此在解决了用户手机端缓存问题的前提下，它拥有着最快的更新速度同时也便于维护。也正是Web App开发出来的应用直接在浏览器上运行，在网络不稳定页面访问速度慢的情况下，用户体验非常糟糕，而在网络正常的情况下也可能存在网站优化不佳消耗用户流量的隐患。另外，通过使用HTML5中自带的API实现出来的Web App，不是一个独立的App，无法发布到AppStore上，其功能也因为无法充分调用系统APi而受到了极大的限制。


1.2.3 Hybrid App 开发模式

即混合开发模式,也就是半原生半Web的开发模式,通过在原生应用上内嵌一个WebView，由 Native 调用 JSBridge 提供的 API 渲染前端人员开发的Web 页面，不需要两个独立的开发人员，开发成本低。具备Web App模式的跨平台优点,更新也比Native App 模式相对自由，因为可以只更新资源文件,不需重新打包apk，但没有Web App 更新那样快速。编译之后的应用仍然是一款独立的原生APP。虽然通过原生调用API使得其在性能体验方面要比 Web App 好很多，但在一些交互性比较强或者复杂动画效果的页面上，其性能受限于WebView的性能桎梏，体验也不如原生App，容易出现卡顿等现象。

1.2.4 ReactNative 开发模式

ReactNative 是Facebook发布一种新型App开发模式，可以让广大开发者使用React库（2013年Facebook推出的一款开源UI库）以及JavaScript框架编写开发移动应用，同时提倡开发者进行组件化开发，其核心思想是：“Learn once, write anywhere”，即学习一次编写任何平台，开发人员能够完成多平台业务场景的开发。官方提供了一些自带组件给开发者，开发者也可以嵌套使用官方组件构建新的组件并发布，从而提高复用性。

不同于之前提到的三种App开发模式,ReactNative 使用 JSX 语法糖结合底层原生语法来实现相应的应用功能，从而解决了Hybrid App 以及 Web App 被诟病已久的糟糕的用户体验以及功能受限问题。而在UI设计上，ReactNative 采用 Flexbox 弹性布局，这是一种基于CSS的跨平台的布局模式。通过在Javascript中使用React库抽象操作系统的原生UI组件，代替DOM元素来渲染界面并将底层的业务逻辑通过调用系统原生API实现使得ReactNative开发出来的应用性能体验都接近于原生开发，又保持着Web APP 的高效快捷的开发效率。这也是本文排除其他App开发模式而热衷于 ReactNative 开发根本原因。 

ReactNative相比于web开发或者原生开发有以下优势：1) 通过虚拟DOM和Diff算法进行动态更新，可以实现产品的快速迭代以及更新发布；2) 性能体验高于Hybrid,不逊色于原生，而且能够实现较为复杂的交互以及动画效果；3) 代码复用率高，一套代码基本可以同时运行在Android 、iOS两个平台；4) 使用React + JS 构建出来的UI代码可直接在浏览器的开发者工具中进行调试；5) 有着较为完善的开发者社区，便于新手学习。当然它也有不完美的地方：一方面 ReactNative 自2015年发布以来一直都没有发布1.0版本，而且在不断的更新这也意味着在大型项目使用RN时需要承担一些风险，因为随着版本的升级工程项目中的版本依赖也需要同步；另一方面ReactNative没有完善的项目日志跟踪工具以及相应的后期上线测试、维护工具，稳定性也不强容易出现应用崩溃的Bug。

### 1.3 论文主要内容

论文选题内容正是基于ReactNative 技术，致力于在 Android 系统上构建一款高校本科实验室便捷学习以及项目跟踪管理的学习辅助程序。程序主要包含四大核心功能模块：元器件数据手册查询、电子实验室用计算器、项目跟踪管理以及用户注册登录。论文着重设计并实现项目跟踪管理模块，在完成基本项目跟踪管理的同时，对功能细节进行改进完善，力求能给用户带来友好便捷的交互方式。该学习辅助程序的研究内容主要包括以下部分：
  1. 元器件数据手册查询
    本科实验室中，尤其是电子类实验室拥有者大量的 IC 芯片单单从型号学生无法获得完整的芯片信息，而只能求助于搜索引擎而往往找到的只是该型号芯片的冰山一角，详细的信息则在一个压缩包中，不方便学生直观的了解学习。本功能模块主要包含搜索框的设计实现、用户搜索历史、搜索结果列表、参数列表以及详情页面。
  2. 实验室用计算器
    该功能的出发点在于解决本科实验室中一旦人数过多，万用表分配不均而引起的不便。重点设计实现了电阻计算器，主要包括页面设计、操作区域以及计算逻辑。
  3. 项目跟踪管理
    项目跟踪管理系统在借鉴 Github 的版本管理模式下，主要进行项目发布、项目权限设置、项目列表、项目详情、项目公告、项目实时动态以及项目更新。其中项目的实时动态会用户改动项目时记录下操作人、操作时间以及具体的操作内容。最大程度方便项目管理者与项目负责人间的沟通交流，以及同步了解项目的实时进度。
  4. 用户注册登录
    具体使用 Node.JS + Express + MySQL 实现了注册登录模块以及充当项目中相关数据存储服务器的功能并最终从本地部署到了腾讯云。主要子模块包括登录提示、登录页面以及用户退出。

### 1.4 本章小结
  通过介绍基于 ReactNative 的学习辅助程序的研究背景、目的和意义，进一步分析了当前国内外的移动应用开发模式的现状以及传统移动应用开发模式与新型的ReactNative开发模式的优劣对比，最终引出了论文的主要研究内容。
## 二. ReactNative 学习辅助程序的总体设计
2.1 程序总体的架构
  应用架构
  FlexBox 的整体布局
2.2 程序功能结构设计
  代码架构
  业务逻辑
  通信过程
2.3 本章小结

## 三.辅助程序的功能模块以及具体实现
3.1 xxx模块的具体设计与实现
### 1. 元器件查询模块
  - 页面设计
  - 列表展示
  - 参数列表
  - 详情pdf
### 2. 行业资讯
  - 轮播展示
  - WebView内容

### 3. 计算器部分
  - 电阻色环计算器
    - 四色环
    - 五色环


## 二. 项目管理功能
  - 发布模块
  - 任务列表
  - 权限设置
  - 进度动态
  - 详情修改

## 三. 用户中心功能
 - 用户登录
 - 多彩主题
 - 意见反馈

## 服务器部分
## Nodejs+ express

## 部署到云端

 ## 参考文献
[1].程化梅. 基于React Native的即时通讯应用的设计与实现[D]. 武汉邮电科学研究院, 2017.

[2].钟爱青. 基于React Native的校园二手物品竞拍平台的设计与实现[J]. 电脑知识与技术, 2018(16).

[3].朱勇. 基于React Native的移动办公应用开发实践[J]. 中国金融电脑, 2017(4):56-60.

[4]. 赵永鹏. 基于RN技术的地推系统设计与实现[J]. 电脑知识与技术, 2018(5).

[5]. 赵永鹏. 基于React Native的物业管理系统设计[J]. 数字技术与应用, 2018(1):165-165.

[6]. 谢檬檬. 基于ReactNative的手机百度社交化系统的设计与实现[D].

[7]. 冯博. 基于React Native框架的兴趣社区Android客户端设计与实现[D].

[8]. 陈宇收. 基于React Native的智慧吉首APP的设计与实现[J]. 电子技术与软件工程, 2018, 141(19):86-87.

[9]. 李敬, 陈才扣, 陆羽, et al. 基于React Native的学教在线一站式平台开发[J]. 电脑知识与技术, 2018, 14(27):76+113.

[10]. Paul A, Nalwaya A. React Native Supplements[J]. 2016.

[11]. Habdas J. Build a streaming audio app with React Native - O'Reilly Media Free, Live Events[J]. 2018.

[12]. Eisenman B . Learning React Native : building Native mobile apps with JavaScript[M]// Learning React Native: Building Native Mobile Apps with JavaScript. O'Reilly Media, Inc. 2018.

 ## 致谢
到这里，论文的撰写接近了尾声，我在深大剩余的日子也即将在青春的六月的某天画上句号，步入社会。但是校园生活的结束并不意味着学习生涯的结束，母校的“自立，自律，自强”精神不断的激励着我严于律己，自强不息，未来的我也会秉承这样的信念在职场中奋发向上，不轻易向挫折失败低头，闯出自己的一片新天地。回首大学四年，大一的懵懂的我要感谢同乡会的陈建宗师兄，引领着我走进深大的校园；也要感谢吴静怡师姐，在每一个我自我矛盾的时刻给我答疑解惑，她是我的良师也是我的益友。大二的时光大部分是在黎冰老师的实验室中度过，实验室开放自由的学习环境满足了我在浩瀚书海遨游、不断学习进步的求知欲，也感谢深大每一个在学习生活中授予我知识，提高我眼界的老师；大三大四的生活自然复杂了一些，校园生活与社会实践交织，使我成为了一个更加饱满的人，在这里我要感谢陈松豪、吴政琳同学，学习上不断给与我帮助，在我初次面对职场生活时也不断给我建议，一起经历那些焦虑的时刻。当然我也要感谢我的父母，如果没有他们，我不可能如此顺利的完成我的学业，毕业典礼上他们可不能缺席，见证我的成长。不过，还有一个比较特别的人，那便是我的直系师妹卢静霞，虽然认识的时间不长，在学习生活上向我的请教使我有机会成为了我所感谢的那类人。
纸短情长，谢谢。

