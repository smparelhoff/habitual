import React from "react";
import { connect } from "react-redux";
import { ScrollView, View, StyleSheet } from "react-native";
import { getOverview } from "../store/overview";
import { ThemeProvider, Button, Text } from "react-native-elements";
import moment from 'moment'

const currMonth = moment().format('MMMM')
const currYear = moment().format("YYYY")

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

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.habits !== this.props.habits) {
      await this.props.fetchOverview();
    }
  }

  render() {
    const habits = Object.keys(this.props.overview);
    return this.props.overview ? (
      <ThemeProvider theme={theme}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 24 }}>{currMonth} {currYear}</Text>
            <Text style={{ fontSize: 18 }}>
              You're doing great!
            </Text>
          </View>
          <View style={styles.contentContainer}>
          {habits.map(habit => {
            return (
              <View
                key={habit}
                style={{
                  flexWrap: "wrap",
                  flexDirection: "row",
                  paddingHorizontal: 50
                }}
              >
                <View styles={styles.textContainer}>
                  <Text style={{ fontSize: 18 }}>{habit}</Text>
                </View>
                <View
                  style={{
                    flexWrap: "wrap",
                    flexDirection: "row",
                    paddingHorizontal: 25,
                    paddingTop: 15,
                    paddingBottom: 25
                  }}
                >
                  {this.props.overview[habit].map(day => {
                    return (
                      <View
                        key={`${habit}${day.date}`}
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          height: 30,
                          width: 30,
                          borderRadius: 50,
                          backgroundColor: day.status
                            ? `${day.color}`
                            : "#dcdcdc"
                        }}
                      >
                        <Text>{day.date}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}
          </View>
        </ScrollView>
      </ThemeProvider>
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
      fontSize: 8,
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
    backgroundColor: "white",
    opacity: 0.5
  },
  contentContainer: {
    paddingTop: 10,
    justifyContent: "center",
    alignContent: "center"
  }
});
