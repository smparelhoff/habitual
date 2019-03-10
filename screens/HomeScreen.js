import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';

import { MontReg } from '../components/StyledText'

const theme = {
  Button: {
    raised: true,
    type: "outline",
    titleStyle: {fontFamily: "montserrat-light"},
    buttonStyle: {backgroundColor: "peachpuff"},
    containerStyle: {width: 200}
  },
};

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome",
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Button
          title="Create New Habit"
          onPress={() => this.props.navigation.navigate('CreateHabit')}
        />
        <Button
          title="Update Habits"
          onPress={() => this.props.navigation.navigate('Habits')}
        />
        <MontReg style={styles.text}>Hello World! I have a font!</MontReg>
        </ScrollView>
      </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5EDED',
    flex: 1,
    alignSelf: "center"
  },
  contentContainer: {
    paddingTop: 30,
  },
  text: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
