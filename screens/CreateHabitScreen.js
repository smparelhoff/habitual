import React from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';

export default class CreateHabitScreen extends React.Component {
  static navigationOptions = {
    title: 'CreateHabit',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
       <Text>Hi!!!!!!!!!!!!!!</Text>
       <Button
          title="Go to Home"
          onPress={() => this.props.navigation.push('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.popToTop()}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
