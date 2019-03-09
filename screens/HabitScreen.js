import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import Habits from "../components/Habits";

class HabitScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null
  };

  render() {
    console.log("Habits props: ", this.props.habits);
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Habits />
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
    paddingTop: 30
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

export default connect(mapStateToProps)(HabitScreen);
