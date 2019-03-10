import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

export default class TouchableSwatch extends React.PureComponent {
  constructor() {
    super();
    this.swatchPressed = this.swatchPressed.bind(this);
  }
  swatchPressed() {
    this.props.onPress(this.props.color);
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.swatchPressed}
        style={{
          backgroundColor: `${this.props.color}`,
          width: 30,
          height: 30,
          margin: 5,
          alignSelf: "center",
          borderRadius: 50
        }}
      />
    );
  }
}
