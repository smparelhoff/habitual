import React from "react";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import { Text, View, StyleSheet } from "react-native";
import moment from 'moment'

const Month = () => {
  return (
    <Calendar 
    style={{
      borderWidth: 5,
      borderColor: 'white',
    }}
    theme={
      {
        backgroundColor: 'white',
        calendarBackground: 'white'
        }
      }
    />
  );
};

export default Month;

const styles = StyleSheet.create({
  monthContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  weekContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  square: {
    backgroundColor: "#dcdcdc",
    width: 30,
    height: 30,
    margin: 5
  }
});
