import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

export default class TouchableSquare extends React.PureComponent {
  constructor(props) {
    super(props);
    this.squarePressed = this.squarePressed.bind(this);
  }
  squarePressed() {
    this.props.onPress({
      name: this.props.name,
      status: this.props.clicked,
      color: this.props.color
    });
  }
  render() {
    const { clicked } = this.props;
    return (
      <TouchableOpacity
        style={
          clicked
            ? [styles.clickedSquare, styles[this.props.color]]
            : styles.square
        }
        onPress={this.squarePressed}
      />
    );
  }
}

const styles = StyleSheet.create({
  clickedSquare: {
    width: 200,
    height: 200,
    margin: 5,
    alignSelf: "center",
    borderRadius: 50
  },
  greenyellow: {
    backgroundColor: "greenyellow"
  },
  royalblue: {
    backgroundColor: "royalblue"
  },
  lightpink: {
    backgroundColor: "lightpink"
  },
  square: {
    backgroundColor: "#dcdcdc",
    width: 200,
    height: 200,
    margin: 5,
    alignSelf: "center",
    borderRadius: 50
  }
});
