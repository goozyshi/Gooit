import * as React from 'react';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';

export default class LoginHint extends React.Component {
  state = {
    visible: true,
    isLogin: false,
  };

  render() {
    return (
      !this.state.isLogin &&
      <Banner
        visible={this.state.visible}
        actions={[
          {
            label:'再用用看',
            onPress: () => this.setState({ visible: false }),
          },
          {
            label: '立即登录',
            onPress: () => this.setState({ visible: false }),
          },
        ]}
        image={({ size }) =>
          <Image
            source={{ uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4' }}
            style={{
              width: size,
              height: size,
            }}
          />
        }
      >
        登录之后可以体验更多功能呢
      </Banner>
    );
  }
}