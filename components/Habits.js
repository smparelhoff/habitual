import React from "react";
import { connect } from "react-redux";
import { ScrollView, View, StyleSheet } from "react-native";
import { ThemeProvider, Button, Text } from "react-native-elements";
import TouchableSquare from "./TouchableSquare";
import { updateHabit } from "../store/habits";


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
              <View style={styles.contentContainer} key={idx}>
                <Text>{habit.name}</Text>
                <TouchableSquare
                  name={habit.name}
                  clicked={habit.status}
                  onPress={this.clickHandler}
                  color={habit.color}
                  date={habit.date}
                  dayOfWeek={habit.dayOfWeek}
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

const theme = {
  Button: {
    type: "outline",
    raised: true,
    containerStyle: {
      width: 100
    },
    titleStyle: {
      color: "black",
      fontFamily: "montserrat-light"
    },
    buttonStyle: {
      backgroundColor: "#F5EDED"
    }
  },
  Text: {
    style: {
      fontSize: 18,
      fontFamily: "montserrat-light",
      padding: 5
    }
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EDED"
  },
  contentContainer: {
    paddingTop: 25,
    alignItems: "center"
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
