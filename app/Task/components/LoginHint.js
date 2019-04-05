import * as React from 'react';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';

export default class LoginHint extends React.Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <Banner
        visible={this.state.visible}
        actions={[
          {
            label: '再看看',
            onPress: () => this.setState({ visible: false }),
          },
          {
            label: '马上登录',
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
        There was a problem processing a transaction on your credit card.
      </Banner>
    );
  }
}