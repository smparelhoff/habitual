import React from "react";
import {connect} from 'react-redux'
import {
  ScrollView,
  Text,
  View,
  StyleSheet
} from "react-native";
import TouchableSquare from './TouchableSquare'

class Habits extends React.Component {
  constructor() {
    super();
    this.state = {
      habitOne: false,
      habitTwo: false,
      habitThr: false,
      habitFo: false
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(name) {
    console.log(name);
    this.setState({
      [name]: this.state[name] ? false : true
    });
  }

  render() {
    return (
      (this.props.habits.length) ? ( 
      <ScrollView pagingEnabled={true}>
        <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
          <View >
            <Text>Habit One</Text>
            <TouchableSquare
              name="habitOne"
              clicked={this.state.habitOne}
              onPress={this.clickHandler}
              color="greenyellow"
            />
          </View>
          <View >
            <Text>Habit Two</Text>
            <TouchableSquare
              name="habitTwo"
              clicked={this.state.habitTwo}
              onPress={this.clickHandler}
              color="royalblue"
            />
          </View>
          <View >
            <Text>Habit Three</Text>
            <TouchableSquare
              name="habitThr"
              clicked={this.state.habitThr}
              onPress={this.clickHandler}
              color="lightpink"
            />
          </View>
        </ScrollView>
      </ScrollView>
      ) : (
        <View>
          <Text>One moment please...</Text>
        </View>
      )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EDED',
    padding: 100,
  },
  contentContainer: {
    paddingVertical: 150,
    alignItems: "center",
    justifyContent: "center",
    padding: 50
  }
});

const mapStateToProps = (state) => ({
  habits: state.habits //Array of objects, each key is habit name, bool for true or false
})


export default connect(mapStateToProps)(Habits);
