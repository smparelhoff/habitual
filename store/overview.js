import { AsyncStorage } from "react-native";
import moment from "moment";

//Time Constants
const currentMonth = moment().month();
const currentYear = moment().year();
const monthLength = moment().daysInMonth();
const currDay = moment().date();

const firstDay = moment()
  .year(currentYear)
  .month(currentMonth)
  .date(1)
  .isoWeekday();

  //Action Constants
const GOT_OVERVIEW = "GOT_OVERVIEW"

  //Action Creators
const gotOverview = (overview) => ({
    type: GOT_OVERVIEW,
    overview
})

  //Thunk Creators
export const getOverview = () => async dispatch => {
    try {
        const habitOverview = await AsyncStorage.getItem(
        `${currentYear}_${currentMonth}`)
        if (habitOverview !== null){
            dispatch(gotOverview(JSON.parse(habitOverview)))
        } else dispatch({})
    } catch (error) {
        console.log(error)
    }
}

const initialState = {}

  //Sub Reducer
  const overview = (state = initialState, action) => {
     
    switch (action.type){
        case GOT_OVERVIEW: {
            return ({...action.overview})
        }
        default: return state
    }
  }

  export default overview
