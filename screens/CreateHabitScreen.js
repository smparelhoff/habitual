import React from "react";
import {
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View
} from "react-native";
import { connect } from "react-redux";
import { createHabit } from "../store/habits";
import TouchableSwatch from '../components/Colors'

class CreateHabitScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      color: ""
    };
    this.handleColor = this.handleColor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static navigationOptions = {
    title: "CreateHabit"
  };

  handleColor(color) {
    this.setState({color})
  }

  handleSubmit(){
    this.props.newHabit(this.state.text, this.state.color)
    this.setState({text: '', color: ''})
    this.props.navigation.navigate('Habits')
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
            <Text>
          <Text style={styles.styledText}>
            Enter a one word description of the habit you would like to track.
          </Text>
          </Text>
          <TextInput
            style={styles.styledText}
            autoCapitalize="none"
            onChangeText={text => this.setState({text})}
            value={this.state.text}
            placeholder="Enter habit name here"
          />
          <Text style={styles.styledText}>Pick a color...</Text>
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
        <Button title="submit" onPress={this.handleSubmit}>Submit</Button>
      </ScrollView>
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
    paddingTop: 15,
    backgroundColor: "#fff",
  },
  swatches: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 15,

  },
  styledText: {
    textTransform: "lowercase",
    fontFamily: "montserrat-light",
    flex: 1,
    height: 50,
    fontSize: 24,
    color: "black",
    flexWrap: "wrap"
  }
});
