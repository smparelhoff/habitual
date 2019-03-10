import { AsyncStorage } from "react-native";
import moment from "moment";

const currentMonth = moment().month();
const currentYear = moment().year();
const monthLength = moment().daysInMonth();
const currDay = moment().date();

const firstDay = moment()
  .year(currentYear)
  .month(currentMonth)
  .date(1)
  .isoWeekday();

// const dummyHabits = [
//   { name: "water", status: false, color: "royalblue" },
//   { name: "lunch", status: false, color: "lightpink" },
//   { name: "bed", status: false, color: "greenyellow" }
// ];

//Action Constants
const CREATED_HABIT = "CREATED_HABIT";
const UPDATE_HABIT = "UPDATE_HABIT";
const GOT_HABITS = "GOT_HABITS"

//Action Creators
const createdHabit = habit => ({
  type: CREATED_HABIT,
  habit
});

export const updateHabit = habit => ({
  type: UPDATE_HABIT,
  habit
});

const gotHabits = (habits) => ({
  type: GOT_HABITS,
  habits
})

//Thunk Creators
export const getHabits = () => async dispatch => {
  try {
    console.log("INSIDE THE THUNK...")
    const allHabits = await AsyncStorage.getItem(
      `${currentYear}_${currentMonth}`
    );
    if (allHabits !== null){
      const deserializeHabits = JSON.parse(allHabits)
      const keys = Object.keys(deserializeHabits)
      const habits = keys.map((key) => {
        return {...deserializeHabits[key][currDay - 1], name: key}
      })
      dispatch(gotHabits(habits))
    } else dispatch(gotHabits([]))
  } catch (error) {
    console.log("HEY! I CAUGHT AN...", error)
  }
}


export const createHabit = (habitName, color) => async dispatch => {
  try {
    const newHabit = createHabitMap(color);
    const currHabits = await AsyncStorage.getItem(
      `${currentYear}_${currentMonth}`
    );
    if (currHabits !== null) {
      const deserializeHabits = JSON.parse(currHabits)
      const newHabits = {...deserializeHabits, [habitName]: newHabit}
      await AsyncStorage.setItem(
        `${currentYear}_${currentMonth}`,
        JSON.stringify(newHabits)
      );
      // await AsyncStorage.removeItem(`${currentYear}_${currentMonth}`)
    } else {
      await AsyncStorage.setItem(`${currentYear}_${currentMonth}`, JSON.stringify({[habitName]: newHabit}))
    }
    
    // const checkStorage = await AsyncStorage.getItem(
    //   `${currentYear}_${currentMonth}`
    // );
    // console.log("CHECK STORAGE: ", JSON.parse(checkStorage));
    const today = newHabit[currDay - 1]
    dispatch(createdHabit({...today, name: habitName }));
  } catch (error) {
    console.log(error);
  }
};

//Sub Reducer
const initialState = [];

const habits = (state = initialState, action) => {
  console.log("INSIDE THE REDUCER?")
  console.log(action)
  switch (action.type) {
    case GOT_HABITS: {
      return action.habits
    }
    case CREATED_HABIT: {
      return [...state, action.habit];
    }
    case UPDATE_HABIT: {
      const updatedState = state.map(elem => {
        if (action.habit.name === elem.name) {
          const status = !elem.status;
          return { ...elem, status };
        } else return elem;
      });
      return updatedState;
    }
    default:
      return state;
  }
};

export default habits;

//helper functions

const createHabitMap = color => {
  const habitMap = [];
  for (let i = 0; i < monthLength; i++) {
    habitMap.push({
      date: i + 1,
      dayOfWeek: (firstDay + i) % 7,
      color: color,
      status: false
    });
  }
  return habitMap;
};
