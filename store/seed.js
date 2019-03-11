import { AsyncStorage } from "react-native";
import moment from 'moment'

const currentMonth = moment().month();
const currentYear = moment().year();
const monthLength = moment().daysInMonth();
const currDay = moment().date();

const firstDay = moment()
  .year(currentYear)
  .month(currentMonth)
  .date(1)
  .isoWeekday();


const seed = async () => {
    try {
        console.log("Attempting to seed...")
        await AsyncStorage.removeItem(`${currentYear}_${currentMonth}`);
        await AsyncStorage.setItem(`${currentYear}_${currentMonth}`, JSON.stringify(dummyData))
        console.log("Seed has run.")

    } catch (error){
        console.log(error)
    }
}

const dummyData = {
  water: [
    {
      color: "royalblue",
      date: 1,
      dayOfWeek: 5,
      status: true
    },
    {
      color: "royalblue",
      date: 2,
      dayOfWeek: 6,
      status: true
    },
    {
      color: "royalblue",
      date: 3,
      dayOfWeek: 0,
      status: true
    },
    {
      color: "royalblue",
      date: 4,
      dayOfWeek: 1,
      status: true
    },
    {
      color: "royalblue",
      date: 5,
      dayOfWeek: 2,
      status: true
    },
    {
      color: "royalblue",
      date: 6,
      dayOfWeek: 3,
      status: true
    },
    {
      color: "royalblue",
      date: 7,
      dayOfWeek: 4,
      status: true
    },
    {
      color: "royalblue",
      date: 8,
      dayOfWeek: 5,
      status: true
    },
    {
      color: "royalblue",
      date: 9,
      dayOfWeek: 6,
      status: true
    },
    {
      color: "royalblue",
      date: 10,
      dayOfWeek: 0,
      status: true
    },
    {
      color: "royalblue",
      date: 11,
      dayOfWeek: 1,
      status: false
    },
    {
      color: "royalblue",
      date: 12,
      dayOfWeek: 2,
      status: false
    },
    {
      color: "royalblue",
      date: 13,
      dayOfWeek: 3,
      status: false
    },
    {
      color: "royalblue",
      date: 14,
      dayOfWeek: 4,
      status: false
    },
    {
      color: "royalblue",
      date: 15,
      dayOfWeek: 5,
      status: false
    },
    {
      color: "royalblue",
      date: 16,
      dayOfWeek: 6,
      status: false
    },
    {
      color: "royalblue",
      date: 17,
      dayOfWeek: 0,
      status: false
    },
    {
      color: "royalblue",
      date: 18,
      dayOfWeek: 1,
      status: false
    },
    {
      color: "royalblue",
      date: 19,
      dayOfWeek: 2,
      status: false
    },
    {
      color: "royalblue",
      date: 20,
      dayOfWeek: 3,
      status: false
    },
    {
      color: "royalblue",
      date: 21,
      dayOfWeek: 4,
      status: false
    },
    {
      color: "royalblue",
      date: 22,
      dayOfWeek: 5,
      status: false
    },
    {
      color: "royalblue",
      date: 23,
      dayOfWeek: 6,
      status: false
    },
    {
      color: "royalblue",
      date: 24,
      dayOfWeek: 0,
      status: false
    },
    {
      color: "royalblue",
      date: 25,
      dayOfWeek: 1,
      status: false
    },
    {
      color: "royalblue",
      date: 26,
      dayOfWeek: 2,
      status: false
    },
    {
      color: "royalblue",
      date: 27,
      dayOfWeek: 3,
      status: false
    },
    {
      color: "royalblue",
      date: 28,
      dayOfWeek: 4,
      status: false
    },
    {
      color: "royalblue",
      date: 29,
      dayOfWeek: 5,
      status: false
    },
    {
      color: "royalblue",
      date: 30,
      dayOfWeek: 6,
      status: false
    },
    {
      color: "royalblue",
      date: 31,
      dayOfWeek: 0,
      status: false
    }
  ],
  floss: [
    {
      color: "lightpink",
      date: 1,
      dayOfWeek: 5,
      status: true
    },
    {
      color: "lightpink",
      date: 2,
      dayOfWeek: 6,
      status: true
    },
    {
      color: "lightpink",
      date: 3,
      dayOfWeek: 0,
      status: true
    },
    {
      color: "lightpink",
      date: 4,
      dayOfWeek: 1,
      status: true
    },
    {
      color: "lightpink",
      date: 5,
      dayOfWeek: 2,
      status: true
    },
    {
      color: "lightpink",
      date: 6,
      dayOfWeek: 3,
      status: true
    },
    {
      color: "lightpink",
      date: 7,
      dayOfWeek: 4,
      status: true
    },
    {
      color: "lightpink",
      date: 8,
      dayOfWeek: 5,
      status: true
    },
    {
      color: "lightpink",
      date: 9,
      dayOfWeek: 6,
      status: true
    },
    {
      color: "lightpink",
      date: 10,
      dayOfWeek: 0,
      status: true
    },
    {
      color: "lightpink",
      date: 11,
      dayOfWeek: 1,
      status: false
    },
    {
      color: "lightpink",
      date: 12,
      dayOfWeek: 2,
      status: false
    },
    {
      color: "lightpink",
      date: 13,
      dayOfWeek: 3,
      status: false
    },
    {
      color: "lightpink",
      date: 14,
      dayOfWeek: 4,
      status: false
    },
    {
      color: "lightpink",
      date: 15,
      dayOfWeek: 5,
      status: false
    },
    {
      color: "lightpink",
      date: 16,
      dayOfWeek: 6,
      status: false
    },
    {
      color: "lightpink",
      date: 17,
      dayOfWeek: 0,
      status: false
    },
    {
      color: "lightpink",
      date: 18,
      dayOfWeek: 1,
      status: false
    },
    {
      color: "lightpink",
      date: 19,
      dayOfWeek: 2,
      status: false
    },
    {
      color: "lightpink",
      date: 20,
      dayOfWeek: 3,
      status: false
    },
    {
      color: "lightpink",
      date: 21,
      dayOfWeek: 4,
      status: false
    },
    {
      color: "lightpink",
      date: 22,
      dayOfWeek: 5,
      status: false
    },
    {
      color: "lightpink",
      date: 23,
      dayOfWeek: 6,
      status: false
    },
    {
      color: "lightpink",
      date: 24,
      dayOfWeek: 0,
      status: false
    },
    {
      color: "lightpink",
      date: 25,
      dayOfWeek: 1,
      status: false
    },
    {
      color: "lightpink",
      date: 26,
      dayOfWeek: 2,
      status: false
    },
    {
      color: "lightpink",
      date: 27,
      dayOfWeek: 3,
      status: false
    },
    {
      color: "lightpink",
      date: 28,
      dayOfWeek: 4,
      status: false
    },
    {
      color: "lightpink",
      date: 29,
      dayOfWeek: 5,
      status: false
    },
    {
      color: "lightpink",
      date: 30,
      dayOfWeek: 6,
      status: false
    },
    {
      color: "lightpink",
      date: 31,
      dayOfWeek: 0,
      status: false
    }
  ],
  workout: [
    {
      color: "yellowgreen",
      date: 1,
      dayOfWeek: 5,
      status: false
    },
    {
      color: "yellowgreen",
      date: 2,
      dayOfWeek: 6,
      status: true 
    },
    {
      color: "yellowgreen",
      date: 3,
      dayOfWeek: 0,
      status: false
    },
    {
      color: "yellowgreen",
      date: 4,
      dayOfWeek: 1,
      status: true 
    },
    {
      color: "yellowgreen",
      date: 5,
      dayOfWeek: 2,
      status: false
    },
    {
      color: "yellowgreen",
      date: 6,
      dayOfWeek: 3,
      status: false
    },
    {
      color: "yellowgreen",
      date: 7,
      dayOfWeek: 4,
      status: false
    },
    {
      color: "yellowgreen",
      date: 8,
      dayOfWeek: 5,
      status: false
    },
    {
      color: "yellowgreen",
      date: 9,
      dayOfWeek: 6,
      status: false
    },
    {
      color: "yellowgreen",
      date: 10,
      dayOfWeek: 0,
      status: false
    },
    {
      color: "yellowgreen",
      date: 11,
      dayOfWeek: 1,
      status: false
    },
    {
      color: "yellowgreen",
      date: 12,
      dayOfWeek: 2,
      status: false
    },
    {
      color: "yellowgreen",
      date: 13,
      dayOfWeek: 3,
      status: false
    },
    {
      color: "yellowgreen",
      date: 14,
      dayOfWeek: 4,
      status: false
    },
    {
      color: "yellowgreen",
      date: 15,
      dayOfWeek: 5,
      status: false
    },
    {
      color: "yellowgreen",
      date: 16,
      dayOfWeek: 6,
      status: false
    },
    {
      color: "yellowgreen",
      date: 17,
      dayOfWeek: 0,
      status: false
    },
    {
      color: "yellowgreen",
      date: 18,
      dayOfWeek: 1,
      status: false
    },
    {
      color: "yellowgreen",
      date: 19,
      dayOfWeek: 2,
      status: false
    },
    {
      color: "yellowgreen",
      date: 20,
      dayOfWeek: 3,
      status: false
    },
    {
      color: "yellowgreen",
      date: 21,
      dayOfWeek: 4,
      status: false
    },
    {
      color: "yellowgreen",
      date: 22,
      dayOfWeek: 5,
      status: false
    },
    {
      color: "yellowgreen",
      date: 23,
      dayOfWeek: 6,
      status: false
    },
    {
      color: "yellowgreen",
      date: 24,
      dayOfWeek: 0,
      status: false
    },
    {
      color: "yellowgreen",
      date: 25,
      dayOfWeek: 1,
      status: false
    },
    {
      color: "yellowgreen",
      date: 26,
      dayOfWeek: 2,
      status: false
    },
    {
      color: "yellowgreen",
      date: 27,
      dayOfWeek: 3,
      status: false
    },
    {
      color: "yellowgreen",
      date: 28,
      dayOfWeek: 4,
      status: false
    },
    {
      color: "yellowgreen",
      date: 29,
      dayOfWeek: 5,
      status: false
    },
    {
      color: "yellowgreen",
      date: 30,
      dayOfWeek: 6,
      status: false
    },
    {
      color: "yellowgreen",
      date: 31,
      dayOfWeek: 0,
      status: false
    }
  ]
};

export default seed