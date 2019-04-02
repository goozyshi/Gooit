import React from 'react';
import { Platform } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import emojiUtils from 'emoji-utils';

import SlackMessage from './SlackMessage';

export default class Example extends React.Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1, //消息的ID，用于标示，必须唯一
          text: 'My message', //发送的消息
          createdAt: new Date(), //发送的时间
          user: {
            _id: 2, //发送方的ID 如果是自己的ID 则在右边，否则在左边
            name: 'React Native', //发送方的昵称
            avatar: 'https://facebook.github.io/react/img/logo_og.png', //发送方的头像
          },
          image: 'https://facebook.github.io/react/img/logo_og.png',
          //添加你所需要扩展的键值对
        },
        {
           _id: 1,
           text: 'This is a system message',
           createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
           system: true,
          //添加你所需要扩展的键值对
        }
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }),()=>console.log(this.state))
  }

  renderMessage(props) {
    const { currentMessage: { text: currText } } = props;

    let messageTextStyle;

    // Make "pure emoji" messages much bigger than plain text.
    if (currText && emojiUtils.isPureEmojiString(currText)) {
      messageTextStyle = {
        fontSize: 28,
        // Emoji get clipped if lineHeight isn't increased; make it consistent across platforms.
        lineHeight: Platform.OS === 'android' ? 34 : 30,
      };
    }

    return (
      <SlackMessage {...props} messageTextStyle={messageTextStyle} />
    );
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
        renderMessage={this.renderMessage}
      />
    );
  }

}