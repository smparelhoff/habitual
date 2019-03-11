import React from "react";
import { TextInput, ScrollView, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { ThemeProvider, Button, Text, Input } from "react-native-elements";
import { createHabit } from "../store/habits";
import TouchableSwatch from "../components/Colors";

class CreateHabitScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      color: "",
      error: ''
    };
    this.handleColor = this.handleColor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static navigationOptions = {
    title: "habitual"
  };

  handleColor(color) {
    this.setState({ color });
  }

  handleSubmit() {
    if (this.state.text && this.state.color)
    {
      this.props.newHabit(this.state.text, this.state.color);
      this.setState({ text: "", color: "" , error: ""});
      this.props.navigation.navigate("Habits");
    } else {
      this.setState({error: "Whoops! Looks like you forgot to pick something."})
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ScrollView style={styles.container}>
          <View style={styles.contentContainer}>
            <Text>
              <Text>
                Enter a one word description of the habit you would like to
                track.
              </Text>
            </Text>
            <View style={styles.contentContainer}>
            <Input
              autoCapitalize="none"
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              placeholder="Enter habit name here"
            />
            </View>
            <View style={styles.contentContainer}>
            <Text>Pick a color that brings you joy!</Text>
            </View>
            <View style={styles.swatches}>
              <TouchableSwatch color="tomato" onPress={this.handleColor} />
              <TouchableSwatch color="coral" onPress={this.handleColor} />
              <TouchableSwatch color="gold" onPress={this.handleColor} />
              <TouchableSwatch color="yellowgreen" onPress={this.handleColor} />
              <TouchableSwatch color="royalblue" onPress={this.handleColor} />
              <TouchableSwatch color="blueviolet" onPress={this.handleColor} />
              <TouchableSwatch color="salmon" onPress={this.handleColor} />
              <TouchableSwatch color="greenyellow" onPress={this.handleColor} />
              <TouchableSwatch color="plum" onPress={this.handleColor} />
              <TouchableSwatch color="turquoise" onPress={this.handleColor} />
              <TouchableSwatch color="lightpink" onPress={this.handleColor} />
            </View>
          </View>
          <View style={styles.buttonContainer}>
          <Text h4={false} style={{fontSize: 12, color: 'red', fontFamily: 'montserrat-regular'}}>{this.state.error}</Text>
          </View>
          <View style={styles.buttonContainer}>
          <Button title="submit" onPress={this.handleSubmit} />
          </View>
        </ScrollView>
      </ThemeProvider>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  newHabit: (name, color) => {
    dispatch(createHabit(name, color));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateHabitScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fffafa"
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  buttonContainer: {
    flex: 1,
    paddingTop: 15,
    alignItems: "center"
  },
  swatches: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 15
  },
});

const theme = {
  Button: {
    type: "outline",
    raised: true,
    containerStyle: {
      width: 100,
    },
    titleStyle: {
      color: "black",
      fontFamily: 'montserrat-light'
    },
    buttonStyle: {
      backgroundColor: "#F5EDED",
    }
  },
  Text: {
    h4: true,
    style: {
      fontFamily: "montserrat-light"
    }
  },
  Input: {
    placeholder: "enter habit name here",
    errorStyle: { color: "red" },
    errorMessage: "required!",
    inputContainerStyle: {
      height: 50
    }
  }
};
