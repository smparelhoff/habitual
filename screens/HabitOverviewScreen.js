import React from "react";
import { connect } from "react-redux";
import { ScrollView, View, Text } from "react-native";
import { getOverview } from "../store/overview";

class HabitOverviewScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      gotOverview: false,
      gotUpdate: false
    };
  }
  static navigationOptions = {
    title: "habitual"
  };

  async componentDidMount() {
    try {
      if (!this.state.gotOverview) {
        await this.props.fetchOverview();
        if (this.props.overview) {
          this.setState({ gotOverview: true });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps, prevState){
    if (prevProps.habits !== this.props.habits) {
      console.log("TRYING TO UPDATE....")
      await this.props.fetchOverview();
    }
  }

  render() {
    const habits = Object.keys(this.props.overview);
    return this.props.overview ? (
      <ScrollView>
        {habits.map(habit => {
          return (
            <View
              key={habit}
              style={{ flexWrap: "wrap", flexDirection: "row", padding: 50 }}
            >
              <Text>{habit}</Text>
              {this.props.overview[habit].map(day => {
                return (
                  <View
                    key={`${habit}${day.date}`}
                    style={{
                      alignSelf: "center",
                      height: 50,
                      width: 50,
                      backgroundColor: day.status ? `${day.color}` : "#dcdcdc",
                      padding: 15
                    }}
                  >
                    <Text>{day.date}</Text>
                  </View>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    ) : (
      <Text>Hold please...</Text>
    );
  }
}

mapStateToProps = state => ({
  overview: state.overview,
  habits: state.habits
});

mapDispatchToProps = dispatch => ({
  fetchOverview: () => dispatch(getOverview())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitOverviewScreen);
