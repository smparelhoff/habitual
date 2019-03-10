import React from "react";
import { connect } from "react-redux";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { ThemeProvider, Button } from "react-native-elements";
import TouchableSquare from "./TouchableSquare";
import { updateHabit } from "../store/habits";

const theme = {
  Button: {
    raised: true,
    type: "outline",
    titleStyle: { fontFamily: "montserrat-light" },
    buttonStyle: { backgroundColor: "peachpuff" },
    containerStyle: { width: 200 }
  }
};

class Habits extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(habit) {
    this.props.habitUpdater(habit);
  }

  render() {
    return this.props.habits.length ? (
      <ThemeProvider theme={theme}>
        <ScrollView pagingEnabled={true}>
          {this.props.habits.map((habit, idx) => {
            return (
              <View key={idx}>
                <Text>{habit.name}</Text>
                <TouchableSquare
                  name={habit.name}
                  clicked={habit.status}
                  onPress={this.clickHandler}
                  color={habit.color}
                />
              </View>
            );
          })}
        </ScrollView>
      </ThemeProvider>
    ) : (
      <ThemeProvider theme={theme}>
        <Text>One moment please...</Text>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EDED",
    padding: 100
  },
  contentContainer: {
    paddingVertical: 150,
    alignItems: "center",
    justifyContent: "center",
    padding: 50
  }
});

const mapStateToProps = state => ({
  habits: state.habits //Array of objects, each key is habit name, bool for true or false
});

const mapDispatchToProps = dispatch => ({
  habitUpdater: habit => dispatch(updateHabit(habit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Habits);
