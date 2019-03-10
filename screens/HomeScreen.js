import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Button,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EDED',
  },
  contentContainer: {
    paddingTop: 30,
  },
});
