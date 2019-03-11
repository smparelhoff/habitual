import React from 'react';
import { connect } from 'react-redux'
import { Platform, StatusBar, StyleSheet, View, Button, Alert } from 'react-native';
import { AppLoading, Asset, Font, Icon, Notifications, Permissions } from 'expo';
import AppNavigator from './navigation/AppNavigator';

// async function getiOSNotificationPermission() {
//   const { status } = await Permissions.getAsync(
//     Permissions.NOTIFICATIONS
//   );
//   if (status !== 'granted') {
//     await Permissions.askAsync(Permissions.NOTIFICATIONS);
//   }
// }

class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  
  // componentDidMount() {
  //   getiOSNotificationPermission();
  //   this.listenForNotifications();
  // }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  // _handleButtonPress = () => {
  //   const localnotification = {
  //     title: 'Update Habits',
  //     body: 'This is the body text of the local notification',
  //     android: {
  //       sound: true,
  //     },
  //     ios: {
  //       sound: true,
  //     },
  //   };
  //   let sendAfterFiveSeconds = Date.now();
  //   sendAfterFiveSeconds += 5000;

  //   const schedulingOptions = { time: sendAfterFiveSeconds };
  //   Notifications.scheduleLocalNotificationAsync(
  //     localnotification,
  //     schedulingOptions
  //   );
  // };

  // listenForNotifications = () => {
  //   Notifications.addListener(notification => {
  //     if (notification.origin === 'received' && Platform.OS === 'ios') {
  //       Alert.alert(notification.title, notification.body);
  //     }
  //   });
  // };

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        //additional fonts
        'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'montserrat-light': require('./assets/fonts/Montserrat-Light.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default connect()(App)