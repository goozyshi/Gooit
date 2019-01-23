import React, { Component } from 'react';
import {
  View,
  Text,
  WebView
} from 'react-native';
import WebViewBridge from 'react-native-webview-bridge';
const injectScript = `
  (function () {
                    if (WebViewBridge) {

                      WebViewBridge.onMessage = function (message) {
                        if (message === "hello from react-native") {
                          WebViewBridge.send("got the message inside webview");
                        }
                      };
                
                      WebViewBridge.send("hello from webview");
                    }
                  }());
`;
class CareerInfo extends Component {
  onBridgeMessage(message){
    const { webviewbridge } = this.refs;
  
    switch (message) {
      case "hello from webview":
        webviewbridge.sendToBridge("hello from react-native");
        break;
      case "got the message inside webview":
        console.log("we have got a message from webview! yeah");
        break;
    }
  }
  
  render() {
    return (
      <WebViewBridge
        ref="webviewbridge"
        onBridgeMessage={this.onBridgeMessage.bind(this)}
        injectedJavaScript={injectScript}
        source={{uri: "https://google.com"}}/>
    );
  }

}


export default CareerInfo;
