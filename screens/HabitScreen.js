import React from "react";
import { View, ScrollView, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";
import Habits from "../components/Habits";
import { getHabits } from "../store/habits";

class HabitScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFetched: false
    };
  }
  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    try {
      if (this.state.dataFetched === false) {
        await this.props.fetchHabits();
        if (this.props.habits) {
          this.setState({ dataFetched: true });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (this.props.habits.length) ? (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Habits />
        </ScrollView>
      </View>
    ) : (
      <View style={styles.container}>
      <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
        <Button
          title="Add New Habit"
          onPress={() => this.props.navigation.navigate("CreateHabit")}
        />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EDED"
  },
  contentContainer: {
    paddingTop: 200
  },
  square: {
    backgroundColor: "red",
    width: 100,
    height: 100
  }
});

const mapStateToProps = state => ({
  habits: state.habits
});

const mapDispatchToProps = dispatch => ({
  fetchHabits: () => dispatch(getHabits())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitScreen);
