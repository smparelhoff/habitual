import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { ThemeProvider, Button, Text } from "react-native-elements";
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
    title: "habitual"
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
    return this.props.habits.length ? (
      <ThemeProvider theme={theme}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.textContainer}>
            <Text style={{paddingBottom: 15}} >Welcome!</Text>
            <Text h4={false} style={{fontSize: 24}}>Here are the habits</Text>
            <Text h4={false} style={{fontSize: 24}}>you're working on.</Text>
          </View>
          <Habits />
        </ScrollView>
      </ThemeProvider>
    ) : (
      <ThemeProvider theme={theme}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Button
            title="Add New Habit"
            onPress={() => this.props.navigation.navigate("CreateHabit")}
          />
        </ScrollView>
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
    h4: true,
    style: {
      fontFamily: "montserrat-light"
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EDED"
  },
  textContainer: {
    padding: 25,
    backgroundColor: 'white',
    opacity: .5,
  },
  contentContainer: {
    paddingTop: 25,
    justifyContent: "center",
    alignContent: "center"
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
