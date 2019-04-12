import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';

import Pdf from 'react-native-pdf';
import BackButton from '../common/BackButton';

export default class PDFView extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.name : 'A Nested Details Screen',
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
  render() {
      let pdf_uri = this.props.navigation.getParam('pdfUrl', '');
      const source = {uri:`${pdf_uri}`,cache:true};
      return (
          <View style={styles.container}>
              <Pdf source={source} style={styles.pdf}/>
          </View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    }
});
